import { Link } from 'react-router-dom';
import { Facebook, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 py-12 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl text-white">
                Student's <span className="text-brand-gold">1st</span> Choice
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm">
              Premium quality school uniform sweaters crafted for warmth, durability, and daily school wear. Partner with us for reliable wholesale supply.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://wa.me/923249442092" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all">
                <MessageCircle size={16} />
              </a>
              <a href="https://www.facebook.com/people/Students-1st-Choice/100084855978178/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all">
                <Facebook size={16} />
              </a>
              <a href="mailto:contact@students1stchoice.com" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Student's 1st Choice. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
