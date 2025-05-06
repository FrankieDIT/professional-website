
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, User, Briefcase, Code, Heart, FileText } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: <Home className="w-4 h-4 mr-2" /> },
    { path: '/about', label: 'About', icon: <User className="w-4 h-4 mr-2" /> },
    { path: '/projects', label: 'Projects', icon: <Code className="w-4 h-4 mr-2" /> },
    { path: '/work', label: 'Work', icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { path: '/hobbies', label: 'Hobbies', icon: <Heart className="w-4 h-4 mr-2" /> },
    { path: '/resume', label: 'Resume', icon: <FileText className="w-4 h-4 mr-2" /> },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6',
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-palette-purple text-xl font-bold font-poppins">
          Frankie Day
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-palette-purple',
                location.pathname === link.path ? 'active-link' : 'text-gray-700'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-palette-purple"
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-4 rounded-lg p-4 mx-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'flex items-center p-2 rounded-md transition-colors',
                  location.pathname === link.path
                    ? 'bg-palette-purple/10 text-palette-purple font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
