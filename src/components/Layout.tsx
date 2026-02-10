import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StickyApplyButton from './StickyApplyButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-20 md:pb-0">{children}</main>
      {location.pathname === '/apply' ? (
        <div className="hidden md:block">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
      <StickyApplyButton />
    </div>
  );
}
