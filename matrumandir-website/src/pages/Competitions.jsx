import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import competitionBgImg from '../assets/carousel2.png'
import CompetitionCard from "../components/CompetitionCard"
import pdfFile from '../assets/Samuahgan_Compitation_Marathi.pdf';

function Competitions() {
  // const [showSignupModal, setShowSignupModal] = useState(false);
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/api/v1/competition/fees/period/')
      .then((res) => res.json())
      .then((data) => {
        setCompetitions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

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
            <p className="md:w-5/6 mx-auto">
              A multifarious institution working in the fields of Education, Research, Rural Development, Women Power, Youth Organisation, National Integration and Health, with a view to Motivation Building and Attitude Formation of every person in all age groups to Change the Face of India for Better.
            </p>
          </div>
        </div>
        <div className='max-w-7xl mx-auto'>
          {loading ? (
            <p>Loading competitions...</p>
          ) : error ? (
            <p className="text-red-600">Failed to load competitions.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitions.map((comp) => (
                <CompetitionCard key={comp._id} competition={comp} />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Callout Section to Download Rules PDF */}
      <section className="bg-[#fef3c7] rounded-lg shadow-md px-4 p-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Download Competition Rules
        </h2>
        <p className="text-gray-700 text-md md:text-lg mb-6">
          Get all the official rules and guidelines for every competition in one place.
        </p>
        <a
          href={pdfFile}
          download
          className="inline-block bg-[#ff680B] hover:bg-white text-white hover:text-[#ff680B] border-2 border-[#ff680B] font-semibold px-6 py-3 rounded-md transition duration-300"
        >
          Download Rules PDF
        </a>
      </section>
    </>
  )
}

export default Competitions