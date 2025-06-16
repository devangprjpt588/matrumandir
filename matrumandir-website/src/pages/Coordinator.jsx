import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import coordinatorBgImg from '../assets/carousel3.png'
import dummyImg from '../assets/dummy.png'

function Coordinator() {
  const coordinators = [
    { name: "Mr. Nitinbhai Kariya", role: "President" },
    { name: "Mr. Yashwant Limaye", role: "Vice President" },
    { name: "Mr. Nitin Sawant", role: "Joint Secretary" },
    { name: "Mr. Manoj Devalekar", role: "Secretary" },
    { name: "Mrs. Sharadatai Choradiya", role: "Vice President" },
    { name: "Mr. Shrikrishna Abhyankar", role: "Coordinator" },
    { name: "Mr. Subhachand Bhosale", role: "Coordinator" },
    { name: "Mr. Shivraj Pimpude", role: "Co-Vice President" },
    { name: "Mr. Sudhir Kulkarni", role: "Joint Secretary" },
    { name: "Mr. Aditya Shinde", role: "Coordinator" }
  ]
  return (
    <>
      <Banner
        title="मातृमंदिर विश्वस्त संस्था"
        subtitle="Coordinator"
        primaryBtn={{ label: "View Activities", link: "/activities" }}
        secondaryBtn={{ label: "Join Us", link: "/contact" }}
        backgroundImage={coordinatorBgImg}
      />
      
      <section>
        <div className="2xl:container mx-auto px-6 my-24">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#ff680B]">Our Coordinators</h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Meet the dedicated team of leaders who guide and support our organization’s mission.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coordinators.map((person, index) => (
              <div key={index} className="bg-white shadow-lg p-4 text-center rounded-md hover:shadow-xl transition">
                <img
                  src={dummyImg}
                  alt={person.name}
                  className="w-24 h-24 mx-auto object-cover rounded-full mb-4 border-2 border-[#ff680B]"
                />
                <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
                <p className="text-sm text-[#ff680B] mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Coordinator