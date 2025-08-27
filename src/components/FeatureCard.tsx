import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FeatureCardProps {
  icon: any; // Replace 'any' with a more specific type if possible
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="text-blue-600 text-3xl mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;