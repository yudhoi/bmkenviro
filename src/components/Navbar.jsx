import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Tim', href: '#tim' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img src="logo.png" alt="Logo PT BMK" className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`} />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors hover:text-brand-green ${
                  scrolled ? 'text-gray-700' : 'text-gray-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#konsultasi"
              className="bg-brand-green hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-brand-green/30 active:scale-95"
            >
              Konsultasi Sekarang
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glassmorphism bg-white/95">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-brand-green hover:bg-green-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#konsultasi"
              className="block w-full text-center mt-4 bg-brand-green hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
