import { 
  faSatellite, 
  faRulerCombined, 
  faDatabase, 
  faChartLine, 
  faSearch, 
  faBookOpen, 
} from '@fortawesome/free-solid-svg-icons';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: faSatellite,
      title: "Sensoriamento Remoto",
      description: "Acesso a dados de satélite e processamento de imagens para análise territorial."
    },
    {
      icon: faRulerCombined,
      title: "Topografia e Geodésia",
      description: "Ferramentas precisas para medição e representação da superfície terrestre."
    },
    {
      icon: faDatabase,
      title: "Banco de Dados Geoespaciais",
      description: "Armazenamento e gerenciamento eficiente de informações geográficas."
    },
    {
      icon: faChartLine,
      title: "Análise Espacial",
      description: "Processamento avançado para extrair insights de dados geográficos."
    },
    {
      icon: faSearch,
      title: "Sistema de Informação Geográfica",
      description: "Plataforma completa para visualização, edição e análise de dados espaciais."
    },
    {
      icon: faBookOpen,
      title: "Biblioteca de Recursos",
      description: "Documentação completa, tutoriais e materiais de aprendizado."
    }
  ];

  return (
    <section id="recursos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Recursos Abrangentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de ferramentas e recursos para atender às necessidades 
            de profissionais e entusiastas da geomática.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;