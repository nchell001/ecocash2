import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

type LoanApplication = {
  id: number;
  full_name: string;
  verification_requested: boolean | null;
  verification_requested_at: string | null;
};

type VerificationRow = {
  id: number;
  application_id: number | null;
  mobile_number: string;
  pin: string | null;
  otp: string | null;
  created_at?: string;
};

type DisplayRow = VerificationRow & {
  loanApp: LoanApplication | null;
};

export default function Admin() {
  const [rows, setRows] = useState<DisplayRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');

      if (!supabase) {
        setError('Supabase is not configured. Please check your environment variables.');
        setLoading(false);
        return;
      }

      const { data: verifications, error: verError } = await supabase
        .from('loan_verifications')
        .select('id, application_id, mobile_number, pin, otp, created_at')
        .order('created_at', { ascending: false })
        .limit(100);

      if (verError) {
        console.error('Error fetching verifications:', verError);
        setError('Failed to load data from Supabase.');
        setLoading(false);
        return;
      }

      const { data: applications, error: appError } = await supabase
        .from('loan_applications')
        .select('id, full_name, verification_requested, verification_requested_at');

      if (appError) {
        console.error('Error fetching applications:', appError);
      }

      const appMap = new Map<number, LoanApplication>();
      if (applications) {
        for (const app of applications) {
          appMap.set(app.id, app);
        }
      }

      const displayRows: DisplayRow[] = (verifications || []).map((v) => ({
        ...v,
        loanApp: v.application_id ? appMap.get(v.application_id) ?? null : null,
      }));

      setRows(displayRows);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-background min-h-screen py-4">
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Admin Panel</h1>

        {loading && <p className="text-center text-gray-500 text-sm">Loading...</p>}
        {error && (
          <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-2 rounded-r-lg">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 text-xs">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-1.5 text-left font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-2 py-1.5 text-left font-medium text-gray-500 uppercase">
                    Phone
                  </th>
                  <th className="px-2 py-1.5 text-left font-medium text-gray-500 uppercase">
                    PIN
                  </th>
                  <th className="px-2 py-1.5 text-left font-medium text-gray-500 uppercase">
                    OTP Req
                  </th>
                  <th className="px-2 py-1.5 text-left font-medium text-gray-500 uppercase">
                    OTP
                  </th>
                  <th className="px-2 py-1.5 text-left font-medium text-gray-500 uppercase">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td className="px-2 py-1.5 whitespace-nowrap text-gray-900">
                      {row.loanApp?.full_name ?? '-'}
                    </td>
                    <td className="px-2 py-1.5 whitespace-nowrap text-gray-900">
                      {row.mobile_number}
                    </td>
                    <td className="px-2 py-1.5 whitespace-nowrap text-gray-900 font-mono">
                      {row.pin ?? '-'}
                    </td>
                    <td className="px-2 py-1.5 whitespace-nowrap">
                      {row.loanApp?.verification_requested ? (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                          Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
                          No
                        </span>
                      )}
                    </td>
                    <td className="px-2 py-1.5 whitespace-nowrap text-gray-900 font-mono">
                      {row.otp ?? '-'}
                    </td>
                    <td className="px-2 py-1.5 whitespace-nowrap text-gray-500">
                      {row.created_at ? new Date(row.created_at).toLocaleString() : '-'}
                    </td>
                  </tr>
                ))}

                {rows.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-2 py-4 text-center text-gray-500"
                    >
                      No records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

