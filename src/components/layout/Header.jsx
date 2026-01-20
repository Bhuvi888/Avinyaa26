import { Link, NavLink } from 'react-router-dom';

/**
 * Header Component
 * 
 * Main navigation header with responsive design.
 * Features: Logo, navigation links, mobile menu toggle
 * 
 * @component
 * @example
 * <Header />
 */
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Avinyaa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-indigo-600 ${
                  isActive ? 'text-indigo-600' : 'text-gray-700'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/events" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-indigo-600 ${
                  isActive ? 'text-indigo-600' : 'text-gray-700'
                }`
              }
            >
              Events
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-indigo-600 ${
                  isActive ? 'text-indigo-600' : 'text-gray-700'
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-indigo-600 ${
                  isActive ? 'text-indigo-600' : 'text-gray-700'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
