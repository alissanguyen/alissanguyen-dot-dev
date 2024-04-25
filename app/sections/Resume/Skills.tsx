import * as React from 'react';
import { useWasInViewAtLeastOnce } from "~/hooks/useWasInViewAtLeastOnce";
import { tech } from "~/constants";

interface Props {

}

const Skills: React.FC<Props> = ({ }) => {
    const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
    const className = wasInViewAtLeastOnce ? "show" : "hide";
    return (
        <section className={`h-fit ${className} w-full`} ref={setRef}>
            <p className="PublishedSoftware__Text text-4xl Resume__BigText font-semibold mb-8">My Tools & Skills</p>
            <div className="line-break-gradient"></div>
            <div className="skills-section-container mt-8">
                <ul className="abilities-wrapper mt-5 md:mt-0 grid grid-cols-2 custom3:grid-cols-3 sm:grid-cols-4 custom:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-5 w-full justify-center items-center">
                    {tech.map((tech, index) => (
                        <li key={tech.id}>
                            <div
                                className={`ability-card ${className} flex flex-col items-center text-left p-8`}
                                style={{
                                    animationDelay: `${1 + index}`
                                }}
                            >
                                <img src={tech.icon} alt={tech.name} className="w-20 h-20" />
                                <p className="text-base text-textSmColor leading-8">
                                    {tech.name}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Skills