import React from 'react';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import competitionBgImg from '../assets/carousel2.png'
import CompetitionCard from "../components/CompetitionCard"
import competitionsData from "../data/competitionsData"

function Competitions() {
  return (
    <>
      <Banner
        title="मातृमंदिर विश्वस्त संस्था"
        subtitle="Competitions"
        primaryBtn={{ label: "View Activities", link: "/activities" }}
        secondaryBtn={{ label: "Join Us", link: "/contact" }}
        backgroundImage={competitionBgImg}
      />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="w-full">
          <div className="pb-24 text-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-8">
              Competitions
            </h2>
            <p className="w-5/6 mx-auto">
              A multifarious institution working in the fields of Education, Research, Rural Development, Women Power, Youth Organisation, National Integration and Health, with a view to Motivation Building and Attitude Formation of every person in all age groups to Change the Face of India for Better.
            </p>
          </div>
        </div>
        <div className='max-w-7xl mx-auto'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitionsData.map((comp) => (
              <CompetitionCard key={comp.id} competition={comp} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Competitions