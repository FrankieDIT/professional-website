
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-palette-purple text-xl font-bold font-poppins">
              YourName
            </Link>
            <p className="text-gray-600 text-sm mt-1">Professional Portfolio</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-palette-purple transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-palette-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 hover:text-palette-purple transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
              <Link to="/about" className="text-gray-600 hover:text-palette-purple transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-gray-600 hover:text-palette-purple transition-colors">
                Projects
              </Link>
              <Link to="/work" className="text-gray-600 hover:text-palette-purple transition-colors">
                Work
              </Link>
              <Link to="/hobbies" className="text-gray-600 hover:text-palette-purple transition-colors">
                Hobbies
              </Link>
              <Link to="/resume" className="text-gray-600 hover:text-palette-purple transition-colors">
                Resume
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} YourName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
