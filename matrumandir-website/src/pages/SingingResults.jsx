import React from 'react';
import Banner from '../components/Banner'
import { MoveRight } from 'lucide-react'
import competitionBgImg from '../assets/carousel2.png'
import { Link } from 'react-router-dom';
import ResultCard from '../components/ResultCard';

const resultData = [
    {
        schoolName: "Global English Medium School",
        competitionName: "पोवाडा गायन",
        level: "DISTRICT",
        rank: "2"
    },
    {
        schoolName: "Global English Medium School",
        competitionName: "अध्यापक समूहगायन",
        level: "STATE",
        rank: "4"
    },
    {
        schoolName: "Maratha High School",
        competitionName: "श्रमदान स्पर्धा",
        level: "DISTRICT",
        rank: "3"
    },
    {
        schoolName: "Maratha High School",
        competitionName: "सूर्यनमस्कार",
        level: "STATE",
        rank: "3"
    },
    {
        schoolName: "Maratha High School",
        competitionName: "पोवाडा गायन",
        level: "DISTRICT",
        rank: "1"
    },
    {
        schoolName: "R. B. H. High School",
        competitionName: "अध्यापक समूहगायन",
        level: "STATE",
        rank: "2"
    },
    {
        schoolName: "R. B. H. High School",
        competitionName: "पोवाडा गायन",
        level: "NATIONAL",
        rank: "NIL"
    },
    {
        schoolName: "R. B. H. High School",
        competitionName: "सूर्यनमस्कार",
        level: "DISTRICT",
        rank: "3"
    }
];

const SingingResults = () => {
    return (
        <>
            <Banner
                title="मातृमंदिर विश्वस्त संस्था"
                subtitle="Singing Results"
                primaryBtn={{ label: "View Activities", link: "/activities" }}
                secondaryBtn={{ label: "Join Us", link: "/contact" }}
                backgroundImage={competitionBgImg}
            />
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Singing Results</h2>
                    <p className="mt-2 text-gray-600">Congratulations to all participants and winners!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resultData.map((result, idx) => (
                        <ResultCard key={idx} result={result} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SingingResults;