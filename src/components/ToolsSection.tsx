import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMap, 
  faGlobe, 
  faSatellite, 
  faRulerCombined, 
  faArrowRight,
  faTools,
} from '@fortawesome/free-solid-svg-icons';

const ToolsSection = () => {
  const tools = [
    {
      name: "Conversor de Coordenadas",
      description: "Converta entre diferentes sistemas de coordenadas e projeções.",
      icon: faGlobe
    },
    {
      name: "Calculadora Topográfica",
      description: "Realize cálculos precisos para levantamentos topográficos.",
      icon: faRulerCombined
    },
    {
      name: "Processador de Imagens",
      description: "Processe e analise imagens de satélite e drones.",
      icon: faSatellite
    },
    {
      name: "Gerador de Mapas",
      description: "Crie mapas temáticos personalizados para suas necessidades.",
      icon: faMap
    }
  ];

  return (
    <section id="ferramentas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ferramentas Especializadas</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Utilize nossas ferramentas desenvolvidas especificamente para trabalhos de geomática.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-2xl mb-3">
                <FontAwesomeIcon icon={tool.icon} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
              <button className="text-blue-600 text-sm font-medium flex items-center">
                Experimentar <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-xs" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 font-medium flex items-center mx-auto">
            <FontAwesomeIcon icon={faTools} className="mr-2" /> Ver Todas as Ferramentas
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;