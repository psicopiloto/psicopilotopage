import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2">
            <Image src="/logo.webp" alt="Psicopiloto Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-gray-800">Psicopiloto</span>
          </a>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-6">
          <li><Link href="/sobre-el-proyecto"><a className="hover:text-gray-600">Sobre el Proyecto</a></Link></li>
          <li><Link href="/servicios"><a className="hover:text-gray-600">Servicios</a></Link></li>
          <li><Link href="/sobre-mi"><a className="hover:text-gray-600">Sobre Mí</a></Link></li>
          <li><Link href="/contacto"><a className="hover:text-gray-600">Contacto</a></Link></li>
        </ul>
        
        {/* Hamburger Menu Icon for Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-4 text-center">
            <li><Link href="/sobre-el-proyecto"><a className="block py-2 hover:bg-gray-100">Sobre el Proyecto</a></Link></li>
            <li><Link href="/servicios"><a className="block py-2 hover:bg-gray-100">Servicios</a></Link></li>
            <li><Link href="/sobre-mi"><a className="block py-2 hover:bg-gray-100">Sobre Mí</a></Link></li>
            <li><Link href="/contacto"><a className="block py-2 hover:bg-gray-100">Contacto</a></Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
