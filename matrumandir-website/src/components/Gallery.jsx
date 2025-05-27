import 'yet-another-react-lightbox/styles.css'
import Lightbox from 'yet-another-react-lightbox';
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import { useState } from 'react';
import gallery1 from '../assets/joy1.png';
import gallery2 from '../assets/joy2.png';
import gallery3 from '../assets/joy3.png';
import gallery4 from '../assets/joy3.png';
import gallery5 from '../assets/joy1.png';
import gallery6 from '../assets/joy2.png';

const slides = [
  { src: gallery1 },
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery4 },
  { src: gallery5 },
  { src: gallery6 },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {slides.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={`Gallery ${i + 1}`}
            className="cursor-pointer w-full h-64 object-cover rounded-md shadow-md hover:shadow-lg transition"
            onClick={() => handleClick(i)}
          />
        ))}
      </div>

      <Link to="/programs"
            className="mt-16 inline-flex items-center gap-3 bg-transparent hover:bg-[#ff680B] text-[#ff680B] hover:text-white border-2 border-[#ff680B] px-4 py-2 rounded-lg font-semibold transition ease-in-out"
        >
            <span>Read More</span>
            <MoveRight />
        </Link>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </>
  );
}