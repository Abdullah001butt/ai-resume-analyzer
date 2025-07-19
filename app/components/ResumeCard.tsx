import React from 'react'
import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";

// Import images directly
import resume1 from '/images/resume_01.png'
import resume2 from '/images/resume_02.png'
import resume3 from '/images/resume_03.png'

const imageMap: Record<string, string> = {
    '/images/resume-1.png': resume1,
    '/images/resume-2.png': resume2,
    '/images/resume-3.png': resume3,
}

const ResumeCard = ({resume: {id, companyName, jobTitle, feedback, imagePath}}: { resume: Resume }) => {
    const actualImageSrc = imageMap[imagePath] || imagePath;

    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    <h2 className="!text-black font-bold break-words">{companyName}</h2>
                    <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore}/>
                </div>
            </div>
            <div className="gradient-border animate-in fade-in duration-1000">
                <div className="w-full h-full">
                    <img
                        src={actualImageSrc}
                        alt="resume"
                        className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
                    />
                </div>
            </div>
        </Link>
    )
}

export default ResumeCard
