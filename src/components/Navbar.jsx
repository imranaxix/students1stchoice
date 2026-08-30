import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Catalogue' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 glassmorphism border-b border-gray-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src="/logo.png" alt="Student's 1st Choice Logo" className="h-12 w-auto object-contain" />
            <span className="font-bold text-xl text-brand-green tracking-tight hidden sm:block">
              Student's <span className="text-brand-gold">1st</span> Choice
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path) ? 'text-brand-green border-b-2 border-brand-green pb-1' : 'text-gray-600 hover:text-brand-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a href="https://wa.me/923249442092" target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-5 text-sm">
              Contact Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-brand-green hover:text-brand-gold focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-brand-green bg-brand-light'
                    : 'text-gray-700 hover:text-brand-green hover:bg-brand-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/923249442092"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block px-3 py-3 mt-4 text-center font-bold text-brand-green bg-brand-gold rounded-xl"
            >
              Contact Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
