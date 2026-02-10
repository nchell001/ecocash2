import { Link, useLocation } from 'react-router-dom';

export default function StickyApplyButton() {
  const location = useLocation();

  if (location.pathname === '/apply') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-gray-200 shadow-lg md:hidden z-40">
      <Link
        to="/apply"
        className="block w-full bg-primary text-white py-4 rounded-full hover:bg-primary-light transition-colors font-semibold text-center text-lg shadow-md"
      >
        Apply for Loan Now
      </Link>
    </div>
  );
}
