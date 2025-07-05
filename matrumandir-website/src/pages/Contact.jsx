import React from 'react';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import competitionBgImg from '../assets/carousel2.png'

const coordinatorData = {
  regionalDivisions: [
    {
      title: "Pune City & Suburbs",
      coordinators: [
        { name: "Shri. Aditya Shinde", phone: "9766933000" }
      ]
    },
    {
      title: "Vidarbha",
      coordinators: [
        { name: "Shri. Nitin Sawant", phone: "9822420209" }
      ]
    },
    {
      title: "Marathwada",
      coordinators: [
        { name: "Shri. Shriram Aangarkar", phone: "9420466885" }
      ]
    },
    {
      title: "W. Maharashtra (Satara, Sangli, Kolhapur, Solapur)",
      coordinators: [
        { name: "Shri. Narayanrao Deshpande", phone: "9822486480" }
      ]
    },
    {
      title: "S. Maharashtra (Nagar, Nashik, Jalgaon, Dhule, Nandurbar)",
      coordinators: [
        { name: "Shri. Nitin Sawant", phone: "9822420209" }
      ]
    },
  ],
  stateCoordinators: [
    { state: "Gujarat", name: "Shri. Yashwant Limaye", phone: "9822000149" },
    { state: "Madhya Pradesh", name: "Shri. Shivaji Pingude", phone: "9370690674" },
    { state: "Goa", name: "Shri. Aditya Shinde", phone: "9766933000" },
    { state: "Karnataka", name: "Shri. Manoj Deolekar", phone: "9881062818" }
  ],
  contacts: [
    { name: "Nitin Sawant", role: "Co-Coordinator & Competition Head", phone: "9822420209" },
    { name: "Sudhir Kulkarni", role: "Co-Coordinator", phone: "9422307323" }
  ]
};

const Contact = () => {
  return (
    <div className="w-full">
      <Banner
        title="मातृमंदिर विश्वस्त संस्था"
        subtitle="Competitions"
        primaryBtn={{ label: "View Activities", link: "/activities" }}
        secondaryBtn={{ label: "Join Us", link: "/contact" }}
        backgroundImage={competitionBgImg}
      />
      <section>
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="flex flex-wrap flex-col">
            <div className="w-full">
              <div className="pb-8 text-center">
                <h2 className="text-2xl md:text-5xl font-bold mb-8">
                  Get in Touch
                </h2>
                <p className="md:w-5/6 mx-auto">
                  We’d love to hear from you!
                </p>
              </div>
            </div>
            <div className="border-b border-[#ff680B] py-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full p-4 bg-gray-100 rounded-xl shadow-md overflow-hidden transition duration-300">
                <h3 className="text-2xl md:text-3xl font-bold my-8 text-center">Regional Coordinators</h3>
                <div className="flex flex-row flex-wrap">
                  {coordinatorData.regionalDivisions.map((region, idx) =>
                    region.coordinators.map((coord, cIdx) => (
                      <div key={`${idx}-${cIdx}`} className='m-4'>
                        <p className="text-sm font-semibold text-gray-800 border-b border-[#ff680B] pb-2 mb-2">{region.title}</p>
                        <p className="text-sm text-gray-700 mt-2">{coord.name}</p>
                        <p className="text-sm text-gray-600">{coord.phone}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="w-full p-4 bg-gray-100 rounded-xl shadow-md overflow-hidden transition duration-300">
                <h3 className="text-2xl md:text-3xl font-bold my-8 text-center">State Level Coordinators</h3>
                <div className="flex flex-row flex-wrap">
                  {coordinatorData.stateCoordinators.map((state, idx) =>
                    <div key={idx} className='m-4'>
                      <p className="text-sm font-semibold text-gray-800 border-b border-[#ff680B] pb-2 mb-2">{state.state}</p>
                      <p className="text-sm text-gray-700 mt-2">{state.name}</p>
                      <p className="text-sm text-gray-600">{state.phone}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full p-4 bg-gray-100 rounded-xl shadow-md overflow-hidden transition duration-300">
                <h3 className="text-2xl md:text-3xl font-bold my-8 text-center">For Contact</h3>
                <div className="flex flex-row flex-wrap">
                  {coordinatorData.contacts.map((contact, idx) =>
                    <div key={idx} className='m-4'>
                      <p className="text-sm font-semibold text-gray-800 border-b border-[#ff680B] pb-2 mb-2">{contact.role}</p>
                      <p className="text-sm text-gray-700 mt-2">{contact.name}</p>
                      <p className="text-sm text-gray-600">{contact.phone}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full p-4 bg-gray-100 rounded-xl shadow-md overflow-hidden transition duration-300">
                <form className="space-y-5">
                  <div>
                    <label className="block mb-1 text-gray-700 font-medium">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-gray-700 font-medium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-gray-700 font-medium">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="text-white hover:text-[#ff680B] font-medium bg-[#ff680B] hover:bg-white font-semibold border-2 hover:border-[#ff680B] transition ease-in-out"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[450px]">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1164655164116!2d73.7662148!3d18.658769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e18ab85ca9%3A0xee2340b14beff97d!2sJnana%20Prabodhini%20Navanagar%20Vidyalaya%20(JPNV)!5e0!3m2!1sen!2sin!4v1750586572467!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
