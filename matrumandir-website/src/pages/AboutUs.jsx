import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import aboutBgImg from '../assets/carousel2.png'
import whoWeAreImg from '../assets/whoweare.png'
import visionImg from '../assets/vision.png'
import missionImg from '../assets/mission.png'

function AboutUs() {
  return (
    <>
      <Banner
        title="मातृमंदिर विश्वस्त संस्था"
        subtitle="About Us"
        primaryBtn={{ label: "View Programs", link: "/programs" }}
        secondaryBtn={{ label: "Join Us", link: "/contact" }}
        backgroundImage={aboutBgImg}
      />
      <section>
        <div className="2xl:container mx-auto px-6 my-24">
          <div className="flex flex-col lg:flex-row items-start md:px-6">
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
            </div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
              <img src={whoWeAreImg} alt="Who We Are" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100">
        <div className="2xl:container mx-auto px-4 md:px-12 py-24 flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
              <img src={visionImg} className="rounded-lg" alt="" />
              <h3 className="text-2xl font-semibold text-[#ff680B] mb-4">Our Vision</h3>
              <p>
                A complete metamorphosis of our ancient society into a vibrant Nation, with spirituality at its core and manifestation of excellence and modernity into an outwardly diverse yet internally integrated human life, is the vision of Jnana Prabodhini.
              </p>
              <p>  
                A new integration has been envisaged for this. Combining spirituality with modern technology; human potentials like intelligence and giftedness are to be harnessed into leadership abilities and social concern.
              </p>
              <p>  
                It is believed that while triggering one’s achievement motivation, it could be possible to submerge its outcome into service of humanity with compassion. This also matches with the concept of ‘Trusteeship’ propounded by Mahatma Gandhi.
              </p>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <img src={missionImg} className="rounded-lg" alt="" />
              <h3 className="text-2xl font-semibold text-[#ff680B] mb-4">Our Mission</h3>
              <p>
                Knitting an organization of selfless workers, leading directly and in-directly the social movements to transform their respective working fields, is the mission of Jnana Prabodhini.
              </p>
              <p>
                This needs a continuum in education and training processes, both for boys and girls, men and women of all age groups; from pre-schooling to real life situations.
              </p>
              <p>
                That requires building a multi-dimensional institution with an experimental character in leadership development in all walks of life. This is not a one-time process, but continuous experimentation is required to evolve processes and methods of encouraging people of all age groups to undertake tasks and challenges in various work fields of life.
              </p>
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs