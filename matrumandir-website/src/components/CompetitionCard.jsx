import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const CompetitionCard = ({ competition }) => {
  const { name, description, image } = competition;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
      <img src={image[0]} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div className="space-y-2 flex-grow">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        <div className="mt-8">
          <Link
            to={`/competition-details/${competition._id}`}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#ff680B] text-[#ff680B] hover:text-white border-2 border-[#ff680B] px-4 py-2 rounded-lg text-sm font-semibold transition ease-in-out"
          >
            More Details
            <MoveRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};


export default CompetitionCard;
