import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

const NewsSection = () => {
  const news = [
    {
      title: "Novo algoritmo para processamento de imagens de satélite",
      date: "15 Out, 2023",
      category: "Tecnologia"
    },
    {
      title: "Webinar: Avanços em SIG para gestão urbana",
      date: "22 Out, 2023",
      category: "Evento"
    },
    {
      title: "Atualização do banco de dados geoespacial disponível",
      date: "05 Out, 2023",
      category: "Atualização"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notícias e Eventos</h2>
            <p className="text-gray-600">Fique por dentro das novidades do mundo da geomática</p>
          </div>
          <button className="text-blue-600 font-medium hidden md:block">
            Ver todos <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                {item.date}
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                  {item.category}
                </span>
                <button className="text-blue-600 text-sm font-medium">
                  Ler mais <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button className="text-blue-600 font-medium mt-6 md:hidden flex items-center">
          Ver todos <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </button>
      </div>
    </section>
  );
};

export default NewsSection;