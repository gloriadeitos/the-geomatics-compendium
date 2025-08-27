import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGlobe, 
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faGlobe} className="text-blue-600 text-2xl mr-2" />
            <span className="text-xl font-bold text-gray-800">The Geomatics Compendium</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 font-medium">Início</a>
            <a href="#recursos" className="text-gray-600 hover:text-blue-600 font-medium">Recursos</a>
            <a href="#ferramentas" className="text-gray-600 hover:text-blue-600 font-medium">Ferramentas</a>
            <a href="#sobre" className="text-gray-600 hover:text-blue-600 font-medium">Sobre</a>
            <a href="#contato" className="text-gray-600 hover:text-blue-600 font-medium">Contato</a>
          </div>
          
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-gray-600 font-medium hover:text-blue-600">Login</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
              Cadastre-se
            </button>
          </div>
          
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600 font-medium">Início</a>
              <a href="#recursos" className="text-gray-600 hover:text-blue-600 font-medium">Recursos</a>
              <a href="#ferramentas" className="text-gray-600 hover:text-blue-600 font-medium">Ferramentas</a>
              <a href="#sobre" className="text-gray-600 hover:text-blue-600 font-medium">Sobre</a>
              <a href="#contato" className="text-gray-600 hover:text-blue-600 font-medium">Contato</a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="px-4 py-2 text-gray-600 font-medium border border-gray-300 rounded hover:text-blue-600">Login</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
                  Cadastre-se
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;