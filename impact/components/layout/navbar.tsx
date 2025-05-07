'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">Impact IT</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${pathname === '/' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className={`${pathname === '/products' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
            >
              Products
            </Link>
            <Link 
              href="/employees" 
              className={`${pathname === '/employees' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
            >
              Team
            </Link>
            <Link 
              href="/about" 
              className={`${pathname === '/about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`${pathname === '/contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
            >
              Contact
            </Link>
          </div>

          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}