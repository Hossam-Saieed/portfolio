import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import {
    portfolioTitle,
    recentProjects,
} from '../constants';
import ProjectList from '../components/ProjectsList';


const Portfolio = () => {
    const [activeTech, setActiveTech] = useState("");
    const [filteredProjects, setFilteredProjects] = useState(recentProjects);

    const handleFilter = (tech) => {
        setActiveTech(tech);
        if (tech === "") {
            setFilteredProjects(recentProjects);
        } else {
            setFilteredProjects(
                recentProjects.filter(project => project.technologies.includes(tech))
            );
        }
    }

    const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: projectsRef, isVisible: recentProjectsVisible } = useIntersectionObserver({ threshold: 0.2 });

    const uniqueTechnologies = [
        ...new Set(recentProjects.flatMap(project => project.technologies))
    ]
    return (
        <main>
            <section className="w-full h-auto overflow-hidden my-10  border-b border-grey-800">
                <div className="flex flex-col md:flex-row w-full">
                    {/* Left section: Title and description */}
                    <div
                        className={`sm:w-2/3 md:w-2/3 lg:w-2/3 flex flex-col justify-center items-start p-10 transition-all duration-1000 ${videoVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-20 opacity-0'
                            }`}
                    >
                        <h1
                            ref={videoRef}
                            className="uppercase cursor-default font-custom font-medium text-6xl md:text-9xl w-full mb-4"
                        >
                            {portfolioTitle}
                        </h1>

                        {/* <div className="flex flex-wrap gap-2 text-center my-4">
                            <button
                                className={`py-2 px-4 uppercase rounded-full font-medium text-sm ${activeTech == "" ? "bg-black text-white" : "border-2 border-[#12120F80]"}`}
                                onClick={() => handleFilter("")}

                            >All</button>
                            {uniqueTechnologies.map((tech, index) => (
                                <button
                                    key={index}
                                    title={tech}
                                    className={`py-2 px-4 uppercase rounded-full font-medium text-sm ${activeTech == tech ? "bg-black text-white" : "border-2 border-[#12120F80]"}`}
                                    onClick={() => handleFilter(tech)}
                                >
                                    {tech}
                                </button>
                            ))}

                        </div> */}

                    </div>

                </div>
            </section>
            <section className="flex flex-col justify-center items-center min-h-screen p-10">

                <div ref={projectsRef} className={`w-full flex flex-col justify-center items-center gap-10 transition-all duration-1000 ${recentProjectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <ProjectList
                        numberOfCardsToBeRendered={4}
                        RecentProjects={filteredProjects}
                    />
                </div>
            </section>
        </main >
    );
};

export default Portfolio;
