import React from 'react';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import competitionBgImg from '../assets/carousel2.png'

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
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-wrap flex-col">
            <div className="w-full">
              <div className="pb-24 text-center">
                <h2 className="text-2xl md:text-5xl font-bold mb-8">
                  Get in Touch
                </h2>
                <p className="w-5/6 mx-auto">
                  We’d love to hear from you!
                </p>
              </div>
            </div>

            {/* --- Contact Form & Map Section --- */}
            <div className="px-4 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
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

              {/* Google Map */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
                <div className="w-full h-[419px] border border-gray-300 rounded-md overflow-hidden shadow-md">
                  <iframe 
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1164655164116!2d73.7662148!3d18.658769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e18ab85ca9%3A0xee2340b14beff97d!2sJnana%20Prabodhini%20Navanagar%20Vidyalaya%20(JPNV)!5e0!3m2!1sen!2sin!4v1750586572467!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
