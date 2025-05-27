import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'

const Banner = ({ title, subtitle, primaryBtn, secondaryBtn, backgroundImage }) => {
  return (
    <section>
        <div className="2xl:container px-6 py-6 md:py-24 mx-auto flex justify-center items-center h-[45rem] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="w-full md:px-10 flex flex-col mx-auto">
                <div className="text-lg font-semibold mb-16 text-white w-full md:w-1/2">
                <h1>
                    <span className='text-[#ff680B]'>{title}</span> {subtitle}
                </h1>
                </div>
                <div className='space-x-6'>
                {primaryBtn && (
                    <Link to={primaryBtn.link} className="inline-flex items-center gap-3 bg-white hover:bg-[#ff680B] text-[#ff680B] hover:text-white border-2 border-transparent px-4 py-2 rounded-lg font-semibold transition ease-in-out">
                        <span>
                            {primaryBtn.label}
                        </span>
                        <MoveRight />
                    </Link>
                )}
                {secondaryBtn && (
                    <Link to={secondaryBtn.link} className="inline-flex items-center gap-3 bg-transparent hover:bg-white text-white hover:text-[#ff680B] border-2 px-4 py-2 rounded-lg font-semibold transition ease-in-out">
                        <span>
                            {secondaryBtn.label}
                        </span>
                        <MoveRight />
                    </Link>
                )}
                </div>
            </div>
            </div>
    </section>
  )
}

export default Banner