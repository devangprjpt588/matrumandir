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
        <div className="max-w-7xl mx-auto px-6 my-24">
          <div className="w-full">
            <div className="pb-24 text-center">
              <h2 className="text-2xl md:text-5xl font-bold mb-8">
                Our Coordinators
              </h2>
              <p className="w-5/6 mx-auto">
                Meet the dedicated team of leaders who guide and support our organization’s mission.
              </p>
            </div>
          </div>
          <div className='md:w-11/12 mx-auto'>
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
        </div>
      </section>
    </>
  )
}

export default Coordinator