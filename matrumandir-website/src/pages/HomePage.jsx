import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import homeBg from '../assets/carousel1.png'
import whoWeAre from '../assets/whoweare.png'

function HomePage() {
  return (
    <>
      <Banner
        title="मातृमंदिर विश्वस्त संस्था"
        subtitle="Empowering Youth, Inspiring Futures"
        primaryBtn={{ label: "View Competition", link: "/competition" }}
        secondaryBtn={{ label: "Join Us", link: "/contact" }}
        backgroundImage={homeBg}
      />
      <section>
        <div className="2xl:container mx-auto px-6 my-24">
          <div className="flex flex-col lg:flex-row items-start px-6">
            <div className="w-full lg:w-1/2 space-y-4 lg:pr-16">
              <h2 className="text-4xl font-semibold pb-4">
                Who We Are
              </h2>
              <p>
                A multifarious institution working in the fields of Education, Research, Rural Development, Women Power, Youth Organisation, National Integration and Health, with a view to Motivation Building and Attitude Formation of every person in all age groups to Change the Face of India for Better.
              </p>
              <p className="pb-8">
                If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicantt’s application, academic and personal, to select students who suit to our community.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 bg-transparent hover:bg-[#ff680B] text-[#ff680B] hover:text-white border-2 border-[#ff680B] px-4 py-2 rounded-lg font-semibold transition ease-in-out"
              >
                <span>Read More</span>
                <MoveRight />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
              <img src={whoWeAre} alt="Who We Are" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-slate-100'>
        <div className="2xl:container mx-auto px-6 py-24">
          <div className="flex flex-wrap flex-col">
            <div className="w-full">
              <div className="pb-12 text-center">
                <h2 className="text-2xl md:text-5xl font-bold mb-8">
                  Our Recent Activities
                </h2>
                <p className="w-5/6 mx-auto">
                  A multifarious institution working in the fields of Education, Research, Rural Development, Women Power, Youth Organisation, National Integration and Health, with a view to Motivation Building and Attitude Formation of every person in all age groups to Change the Face of India for Better.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="lg:w-full mx-auto md:flex md:flex-wrap">
                <div className="w-full md:w-1/3 flex items-stretch h-auto">
                  <div className="py-6 px-4">
                    <div className='w-full flex items-stretch h-full'>
                      <div className='lg:shadow-md lg:hover:shadow-lg bg-[#F8F8F8] hover:bg-gradient-to-b from-[#feffe3] from-5% via-[#F8F8F8] via-70% to-[#feffe3] to-95% rounded-md'>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage