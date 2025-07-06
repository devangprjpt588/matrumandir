import React from 'react';

const ResultCard = ({ result }) => {
  const { rank, competitionName, schoolName, level } = result;

  return (
    <div className="bg-white rounded-xl shadow-md flex gap-4 border-2 border-[#fef3c7]">
      {/* Left: Rank */}
      <div className="rounded-lg p-6 flex flex-col items-center w-1/3 justify-center bg-[#fef3c7]">
        <span className="text-6xl font-bold">{rank}</span>
        <span className="text-xl font-bold text-gray-700">RANK</span>
      </div>

      {/* Right: Details */}
      <div className="flex flex-col justify-center w-2/3 space-y-2">
        <p className="text-md font-semibold text-gray-800">{competitionName}</p>
        <p className="text-sm text-gray-600">{schoolName}</p>
        <p className="text-sm text-gray-600">Level: {level}</p>
      </div>
    </div>
  );
};

export default ResultCard;