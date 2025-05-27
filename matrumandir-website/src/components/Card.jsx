import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="w-full md:w-1/3 flex items-stretch h-auto">
      <div className="py-6 px-4 w-full">
        <div className="w-full flex items-stretch h-full">
          <div className="lg:shadow-md lg:hover:shadow-lg bg-white rounded-md flex flex-col justify-between">
            <div className="rounded-t-md mb-5">
              <img src={image} alt={title} className="w-full" />
            </div>
            <div className="px-4 pb-8 flex flex-col justify-between items-center space-y-6 text-center flex-grow">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p>{description}</p>
              <Link
                to={link}
                className="inline-flex items-center gap-3 bg-transparent hover:bg-[#ff680B] text-[#ff680B] hover:text-white border-2 border-[#ff680B] px-4 py-2 rounded-lg font-semibold transition ease-in-out"
              >
                <span>Read More</span>
                <MoveRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;