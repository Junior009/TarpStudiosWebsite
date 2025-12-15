import React from 'react';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Linkedin,
  Send  // Use Send instead of Telegram
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/tarpstudios' },
    { icon: Twitter, url: 'https://x.com/tarpstudios' },
    { icon: Facebook, url: 'https://facebook.com/tarpstudios' },
    { icon: Youtube, url: 'https://youtube.com/tarpstudios' },
    { icon: Linkedin, url: 'https://linkedin.com/company/tarpstudios' },
    { icon: Send, url: 'https://t.me/tarpstudios' }  // Telegram alternative
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Digital Services', path: '/services' },
    { name: 'Tech Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' }
  ];

  const services = [
    'Branding & Design',
    'Video Editing',
    'Web Development',
    'Social Media Marketing',
    'AI Automation'
  ];

  return (
    <footer className="bg-[#1E1E1E] text-white py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-[#2980B9] mb-4">TARP STUDIOS</h3>
          <p className="text-sm">Empowering growth through digital solutions and partnerships.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          {quickLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="block text-sm hover:text-[#2980B9] mb-2"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          {services.map((service) => (
            <p key={service} className="text-sm mb-2 hover:text-[#2980B9]">
              {service}
            </p>
          ))}
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, url }) => (
              <a 
                key={url} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#2980B9] transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">© 2025 Tarp Studios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;