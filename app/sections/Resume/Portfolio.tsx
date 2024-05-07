import * as React from 'react';
import ChessImage from "../../assets/portfolio-projects/chess.png"
import ImgGeneratorImage from "../../assets/portfolio-projects/image.png"
import SignLanguageImage from "../../assets/portfolio-projects/sign.png"
import SparkleSVG from '~/components/SparkleSVG';

const portfolioProjects = [
    {
        id: "chess",
        name: "Chess Game with AI",
        techStack: ["Python", "PIP", "Sublime Text"],
        thumb: ChessImage
    },
    {
        id: "imageGenerator",
        name: "AI Image Generator",
        techStack: ["JavaScript", "GPT"],
        thumb: ImgGeneratorImage
    },
    {
        id: "signLanguage",
        name: "Sign Language Detection with TensorFlow",
        techStack: ["Python", "TensorFlow"],
        thumb: SignLanguageImage
    }
]


const Portfolio: React.FC<React.PropsWithChildren> = () => {
    return (
        <div className='flex flex-col items-start justify-center gap-14 mb-20' id="portfolio">
            <div className='flex flex-row items-center text-2xl gap-3 font-medium rounded-3xl border-2 border-gray-300 text-textSmColor px-8 py-2'>
                <SparkleSVG />
                <h2>Portfolio</h2>
            </div>
            <ul className="FeaturedProjects__Wrapper grid xs:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
                {portfolioProjects.map((project) => <li key={project.id}><PortfolioProjectCard key={project.id} project={project} /></li>)}
            </ul>
        </div>
    )
}

export default Portfolio

interface Project {
    id: string;
    name: string;
    techStack: string[];
    thumb: string | undefined;
}

interface Props extends React.PropsWithChildren {
    project: Project
}

const PortfolioProjectCard: React.FC<Props> = (props) => {
    return (
        <div className="ProjectCard__Wrapper flex rounded-2xl relative overflow-hidden" key={props.project.id}>
            <img src={props.project.thumb} alt="" className='ProjectCard__Image z-[2] rounded-2xl filter brightness-50 hover:brightness-70 hover:scale-110 transition-transform duration-500 ease-in-out transform w-full h-full object-cover relative overflow-hidden' />
            <div className="ProjectCard__Description flex flex-col items-start gap-5 z-[10] absolute text-white bottom-0 p-3 md:p-5 bg-blend-overlay">
                <span className="font-medium text-xl drop-shadow-lg">
                    {props.project.name}
                </span>
                <div className="ProjectCard__BadgeWrapper relative flex flex-row items-center justify-start gap-1 custom:gap-2">
                    {props.project.techStack.map((tech) => (
                        <span key={tech} className="ProjectCard__Badge text-sm custom:text-base bg-black px-2 custom:px-3 py-2 leading-none rounded-2xl">{tech}</span>
                    ))}
                </div>

            </div>

        </div>
    )
}