import { useLocation } from 'react-router-dom';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Import images
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpg';
import gallery9 from '../assets/gallery9.jpg';
import gallery10 from '../assets/gallery10.jpg';
import gallery11 from '../assets/gallery11.jpg';
import gallery12 from '../assets/gallery12.jpg';
import gallery13 from '../assets/gallery13.jpg';
import gallery14 from '../assets/gallery14.jpg';
import gallery15 from '../assets/gallery15.jpg';
import gallery16 from '../assets/gallery16.jpg';
import gallery17 from '../assets/gallery17.jpg';
import gallery18 from '../assets/gallery18.jpg';
import gallery19 from '../assets/gallery19.jpg';
import gallery20 from '../assets/gallery20.jpg';
import gallery21 from '../assets/gallery21.jpg';
import gallery22 from '../assets/gallery22.jpg';
import gallery23 from '../assets/gallery23.jpg';
import gallery24 from '../assets/gallery24.jpg';
import gallery25 from '../assets/gallery25.jpg';
import gallery26 from '../assets/gallery26.jpg';
import gallery27 from '../assets/gallery27.jpg';
import gallery28 from '../assets/gallery28.jpg';
import gallery29 from '../assets/gallery29.jpg';
import gallery30 from '../assets/gallery30.jpg';
import gallery31 from '../assets/gallery31.jpg';
import gallery32 from '../assets/gallery32.jpg';
import gallery33 from '../assets/gallery33.jpg';
import gallery34 from '../assets/gallery34.jpg';

// Image array
const slides = [
  { src: gallery1 }, { src: gallery2 }, { src: gallery3 }, { src: gallery4 }, { src: gallery5 }, { src: gallery6 },
  { src: gallery7 }, { src: gallery8 }, { src: gallery9 }, { src: gallery10 }, { src: gallery11 }, { src: gallery12 },
  { src: gallery13 }, { src: gallery14 }, { src: gallery15 }, { src: gallery16 }, { src: gallery17 }, { src: gallery18 },
  { src: gallery19 }, { src: gallery20 }, { src: gallery21 }, { src: gallery22 }, { src: gallery23 }, { src: gallery24 },
  { src: gallery25 }, { src: gallery26 }, { src: gallery27 }, { src: gallery28 }, { src: gallery29 }, { src: gallery30 },
  { src: gallery31 }, { src: gallery32 }, { src: gallery33 }, { src: gallery34 },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const location = useLocation();

  // Show all images if on /gallery, else only first 6
  const visibleSlides = location.pathname === "/gallery" ? slides : slides.slice(0, 6);

  const handleClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleSlides.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={`Gallery ${i + 1}`}
            className="cursor-pointer w-full h-64 object-cover rounded-md shadow-md hover:shadow-lg transition"
            onClick={() => handleClick(i)}
          />
        ))}
      </div>

      {location.pathname !== "/gallery" && (
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 bg-transparent hover:bg-[#ff680B] text-[#ff680B] hover:text-white border-2 border-[#ff680B] px-6 py-2 rounded-lg font-semibold transition ease-in-out"
          >
            Read More
          </Link>
        </div>
      )}

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
