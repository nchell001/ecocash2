import { Link, useLocation } from 'react-router-dom';

export default function StickyApplyButton() {
  const location = useLocation();

  if (location.pathname === '/apply') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden z-40">
      <Link
        to="/apply"
        className="block w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-center text-lg"
      >
        Apply for Loan Now
      </Link>
    </div>
  );
}
