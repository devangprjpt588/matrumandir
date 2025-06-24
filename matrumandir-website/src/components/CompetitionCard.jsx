import React, { useState } from "react";

const CompetitionCard = ({ competition }) => {
  const {
    name,
    description,
    image,
    startDate,
    time,
    mode,
    status,
    feeAmount,
    venue,
    regionId,
    rules,
    awards // <== Add this to destructure
  } = competition;

  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => setShowModal(!showModal);

  // Award table component
  const AwardsTable = ({ level, positions }) => (
    <div className="mt-4">
      <h4 className="font-semibold text-[#ff680B]">{level} Level Awards</h4>
      <table className="w-full border mt-1 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">Position</th>
            <th className="border px-2 py-1 text-left">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((pos, i) => (
            <tr key={i}>
              <td className="border px-2 py-1">{pos.title}</td>
              <td className="border px-2 py-1">₹{pos.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img src={image[0]} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4 space-y-3">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="grid grid-cols-3 gap-2 text-sm pt-2">
          <div>
            <strong>Date:</strong>
            <br />
            {new Date(startDate).toLocaleDateString()}
          </div>
          <div>
            <strong>Time:</strong>
            <br />
            {time}
          </div>
          <div>
            <strong>Mode:</strong>
            <br />
            {mode}
          </div>
          <div>
            <strong>Status:</strong>
            <br />
            <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded">
              {status}
            </span>
          </div>
          <div>
            <strong>Fees:</strong>
            <br />₹{feeAmount}/-
          </div>
          <div>
            <strong>Rules:</strong>
            <br />
            <button
              className="bg-slate-400 text-white hover:underline text-xs"
              onClick={handleModalToggle}
            >
              View
            </button>
          </div>
        </div>

        <div className="text-sm pt-2 space-y-2">
          <p>
            <strong>Region:</strong> {regionId}
          </p>
          <p>
            <strong>Venue:</strong> {venue}
          </p>
        </div>
      </div>

      {/* Modal for Rules */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white max-w-lg w-full p-6 rounded-lg shadow-xl relative">
            <h3 className="text-lg font-semibold mb-2 text-[#ff680B]">Competition Rules</h3>

            <div className="max-h-[450px] overflow-y-auto pr-2 custom-scroll">
              {/* Rules Text */}
              <pre className="text-sm whitespace-pre-wrap text-gray-700">{rules}</pre>

              {/* Awards Table */}
              {awards?.map((award, index) => (
                <AwardsTable
                  key={index}
                  level={award.level}
                  positions={award.positions}
                />
              ))}
            </div>

            <button
              onClick={handleModalToggle}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetitionCard;
