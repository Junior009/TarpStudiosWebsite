import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TarpLogo from '@/assets/images/tarp.png'; // Import the logo image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Digital Services', path: '/services' },
    { name: 'Tech Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Affiliate Program', path: '/affiliate' },
    { name: 'Sales Partners', path: '/partners' }
  ];

  return (
    <header className="fixed w-full bg-[#1E1E1E] text-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={TarpLogo} 
              alt="TARP STUDIOS Logo" 
              className="h-8 w-auto" // Adjust size as needed
            />
            <span className="text-2xl font-bold text-[#2980B9] hidden sm:inline">
              TARP STUDIOS
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="hover:text-[#2980B9] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" className="ml-4 border-[#2980B9] text-[#2980B9] hover:bg-[#2980B9] hover:text-white">
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#1E1E1E] md:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl hover:text-[#2980B9] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                variant="outline" 
                className="border-[#2980B9] text-[#2980B9] hover:bg-[#2980B9] hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;