import React from 'react'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import galleryBgImg from '../assets/carousel1.png'

function GalleryPage() {
  return (
    <>
      <Banner
        title="मातृमंदिर विश्वस्त संस्था"
        subtitle="Coordinator"
        primaryBtn={{ label: "View Activities", link: "/activities" }}
        secondaryBtn={{ label: "Join Us", link: "/contact" }}
        backgroundImage={galleryBgImg}
      />
      <section>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-wrap flex-col">
            <div className="w-full">
              <div className="pb-24 text-center">
                <h2 className="text-2xl md:text-5xl font-bold mb-8">
                  Gallery
                </h2>
                <p className="md:w-5/6 mx-auto">
                  A multifarious institution working in the fields of Education, Research, Rural Development, Women Power, Youth Organisation, National Integration and Health, with a view to Motivation Building and Attitude Formation of every person in all age groups to Change the Face of India for Better.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="lg:w-full mx-auto md:flex md:flex-wrap justify-center">
                <Gallery />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GalleryPage