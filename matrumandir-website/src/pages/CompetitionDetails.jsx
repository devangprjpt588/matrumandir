import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Banner from '../components/Banner'
import { MoveRight } from 'lucide-react'
import competitionBgImg from '../assets/carousel2.png'

const CompetitionDetails = () => {
  const { id } = useParams();
  const [competition, setCompetition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/api/v1/competition/fees/period/')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((comp) => comp._id === id);
        if (found) {
          setCompetition(found);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching competition details:', err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error || !competition)
    return <div className="text-center py-10 text-red-600">Competition not found.</div>;

  const {
    name,
    description,
    image,
    startDate,
    time,
    venue,
    mode,
    feeAmount,
    status,
    rules,
    awards,
  } = competition;

  return (
    <>
      <Banner
        title="मातृमंदिर विश्वस्त संस्था"
        subtitle="Competitions"
        primaryBtn={{ label: "View Activities", link: "/activities" }}
        secondaryBtn={{ label: "Join Us", link: "/contact" }}
        backgroundImage={competitionBgImg}
      />
      <div className='max-w-7xl mx-auto px-4 my-24'>
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/2 space-y-4 lg:pr-8">
            <img
              src={image[0]}
              alt={name}
              className="w-full h-[491px] object-cover rounded-lg mb-6 rounded-xl shadow-md border"
            />
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.131508520804!2d73.76009407424088!3d18.658093764960896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e25f286491%3A0xc2f0295fc946dc6c!2sPrabodhan%20Co-Operative%20Housing%20Society%20Limited!5e0!3m2!1sen!2sin!4v1751727603839!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[491px] rounded-lg mb-6 rounded-xl shadow-md border">
            </iframe>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center w-full space-x-8">
          <div className="bg-[#ff680B] px-4 py-6 my-6 text-white text-xl rounded-xl">
            <strong>Date:</strong> {new Date(startDate).toLocaleDateString()}
          </div>
          <div>
            <h2 className="text-3xl font-bold items-center border-b border-[#ff680B] pb-2">{name}</h2>
            <p className="mt-2"><strong>Time:</strong> {time}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg my-8">
          <div className="space-y-8">
            <p>{description}</p>
            <div>
              <h2 className="text-2xl font-bold items-center border-b border-[#ff680B] pb-2">Competition Details</h2>
              <ul className="space-y-4 pt-4">
                <li>
                  <strong>Date:</strong> {new Date(startDate).toLocaleDateString()}
                </li>
                <li>
                  <strong>Time:</strong> {time}
                </li>
                <li>
                  <strong>Mode:</strong> {mode}
                </li>
                <li>
                  <strong>Fees:</strong> ₹{feeAmount}
                </li>
                <li>
                  <strong>Status:</strong>{' '}
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                    {status}
                  </span>
                </li>
                <li>
                  <strong>Venue:</strong> {venue}
                </li>
              </ul>
            </div>
            <div>
              {awards && awards.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#ff680B]">Awards</h3>
                  {awards.map((award, index) => (
                    <div key={index} className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">{award.level} Level</h4>
                      <table className="w-full text-sm border">
                        <thead className="bg-gray-200">
                          <tr>
                            <th className="border px-3 py-2 text-left">Position</th>
                            <th className="border px-3 py-2 text-left">Amount (₹)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {award.positions.map((pos, i) => (
                            <tr key={i}>
                              <td className="border px-3 py-2">{pos.title}</td>
                              <td className="border px-3 py-2">₹{pos.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-6 border">
            <h2 className="text-2xl font-bold items-center border-b border-[#ff680B] pb-2 mb-4">Rules</h2>
            <pre className="whitespace-pre-wrap">
              {rules}
            </pre>
          </div>
        </div>
        <Link
          to="/competition"
          className="inline-block bg-[#ff680B] text-white px-6 py-2 rounded hover:bg-[#e05e00] transition"
        >
          ← Back to Competitions
        </Link>
      </div>
    </>
  );
};

export default CompetitionDetails;