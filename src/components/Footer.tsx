import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="mailto:contact@holisticemergency.com" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <Mail size={18} />
                <span>contact@holisticemergency.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/how-it-works" className="text-gray-300 hover:text-white">How It Works</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Developer</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Developed by Nikhil Sharma</p>
              <a 
                href="https://github.com/NikhilSharma2707" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white"
              >
                <Github size={18} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            "Empowering Emergency Response Through Innovation"
          </p>
          <p className="text-gray-400 mt-2">
            © 2025 Holistic Emergency Response. Proudly presented by Nikhil Sharma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;