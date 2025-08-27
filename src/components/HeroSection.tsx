import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMap, 
  faBookOpen, 
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              O Compêndio Completo de <span className="text-blue-600">Geomática</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore ferramentas, recursos e conhecimentos essenciais para profissionais e estudantes 
              de geomática, topografia, sensoriamento remoto e sistemas de informação geográfica.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium flex items-center justify-center">
                Começar Agora <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 font-medium flex items-center justify-center">
                <FontAwesomeIcon icon={faBookOpen} className="mr-2" /> Ver Tutorial
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-blue-200 rounded-full opacity-30 absolute -top-10 -left-10"></div>
              <div className="w-80 h-80 bg-indigo-200 rounded-full opacity-30 absolute -bottom-10 -right-10"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full max-w-md">
                <div className="flex justify-center mb-4">
                  <FontAwesomeIcon icon={faMap} className="text-blue-600 text-5xl" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Visualizador de Mapas</h3>
                <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Visualização interativa de mapas</span>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
                  Experimentar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;