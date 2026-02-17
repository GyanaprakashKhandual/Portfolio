// app/components/assets/NavbarWrapper.jsx
'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const pathname = usePathname();

  const shouldHide =
    pathname === '/docs' ||
    pathname.startsWith('/docs/') ||
    ['/privacy-policy', '/terms-and-conditions', '/music', '/vlogs'].includes(pathname);

  return shouldHide ? null : <Navbar />;
}