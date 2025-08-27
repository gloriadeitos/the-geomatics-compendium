import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const CommunitySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Junte-se à Nossa Comunidade</h2>
              <p className="mb-6 opacity-90">
                Conecte-se com outros profissionais, compartilhe conhecimento e participe de discussões 
                sobre as últimas tendências em geomática.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 font-medium flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsers} className="mr-2" /> Participar do Fórum
                </button>
                <button className="px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-blue-700 font-medium">
                  Eventos da Comunidade
                </button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white bg-opacity-20 p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">1.5K+</div>
                  <div className="text-sm opacity-90">Membros Ativos</div>
                </div>
                <div className="h-1 bg-white bg-opacity-30 my-4"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">320+</div>
                  <div className="text-sm opacity-90">Tutoriais Publicados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;