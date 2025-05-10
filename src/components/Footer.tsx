
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Developer Portfolio</p>
            <p className="text-gray-400 text-sm">Frontend Developer</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/balaprasadpenta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/balaprasad-penta/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://x.com/Pentawarbala" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm flex items-center justify-center">
          <p>© {currentYear} Developer Portfolio. Made with</p>
          <Heart className="h-4 w-4 mx-1 text-red-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
