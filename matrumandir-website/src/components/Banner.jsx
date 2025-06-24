import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const Banner = ({ title, subtitle, primaryBtn, secondaryBtn, backgroundImage }) => {
    return (
        <section className="w-full">
            <div
                className="relative w-full bg-cover bg-center bg-no-repeat h-[45rem] flex items-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="w-full md:w-11/12 flex flex-col">
                        <div className="mb-10 md:mb-16 text-white w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                                <span className='text-[#ff680B]'>{title}</span>{' '}
                                {subtitle && <span>{subtitle}</span>}
                            </h1>
                        </div>
                        <div className="space-x-4">
                            {primaryBtn && (
                                <Link to={primaryBtn.link} className="inline-flex items-center gap-2 bg-white hover:bg-[#ff680B] text-[#ff680B] hover:text-white border-2 border-transparent px-4 py-2 rounded-lg font-semibold transition ease-in-out">
                                    {primaryBtn.label}
                                    <MoveRight size={16} />
                                </Link>
                            )}
                            {secondaryBtn && (
                                <Link to={secondaryBtn.link} className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-[#ff680B] border-2 border-white px-4 py-2 rounded-lg font-semibold transition ease-in-out">
                                    {secondaryBtn.label}
                                    <MoveRight size={16} />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
