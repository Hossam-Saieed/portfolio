import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { AboutProject, PBPMTitle, recentProjects } from "../constants";
import MainPBMImage from "../assets/mainPBMImage.svg"
import NavItem from "./NavItem";
import ProjectList from "./ProjectsList";
import CustomButton from "./CustomButton";
const PBPMProject = () => {

    const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({
        threshold: 0.2,
    });
    const { ref: projectsRef, isVisible: recentProjectsVisible } = useIntersectionObserver({ threshold: 0.2 });
    const otherProjects = recentProjects.filter((project) => project.projectPath !== "pbpm");
    const { technologies, Challenge, Approach, aboutTheProjectDetails, secondSection, projectObjectiveDetails, stakeholderFindings, technicalFindings, additionalNotes, interviewDetails, researchData, userResearchFindings, marketResearchFindings, userPersona, informationArchitecture, siteMapContent, visualDesignContent, methedologiesContent, lessonsLearned } = recentProjects.filter((project) => project.projectPath == "pbpm")[0];
    return (
        <main>
            <section className="w-full h-auto overflow-hidden my-10">
                <div className="flex flex-col md:flex-row w-full">
                    {/* Left section: Title and description */}
                    <div className="w-full md:w-2/3 flex flex-col justify-center items-start p-5 md:p-10">
                        <div
                            className={`transition-all duration-1000 ${videoVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-20 opacity-0'
                                }`}
                        >
                            <h1
                                ref={videoRef}
                                className="uppercase cursor-default font-custom font-medium text-4xl md:text-6xl lg:text-9xl w-full mb-4"
                            >
                                {PBPMTitle}
                            </h1>
                            <div className="flex flex-wrap gap-1">
                                {technologies.map((tech, index) => (
                                    <button
                                        key={index}
                                        title={tech}
                                        className={`uppercase rounded-full font-medium flex flex-wrap gap-2 text-xs px-4 py-2 md:text-sm lg:text-xs ${index > 0 ? " border-2 border-[#12120F80]" : "bg-[#12120F80] text-white"}`}
                                        disabled
                                    >
                                        {tech}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right section: Empty */}
                    <div className="hidden md:block md:w-1/3"></div>
                </div>
                <div className="flex justify-center w-full mt-8 bg-[#0896D4] pt-10 rounded-3xl">
                    <img
                        src={MainPBMImage}
                        loading="lazy"
                        alt="MainPBMImage"
                        className="w-11/12 md:w-4/5 object-cover h-auto"
                    />
                </div>
            </section>

            <section className="p-5 md:p-10">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-2/6">
                        <h2 className="text-4xl md:text-6xl font-medium uppercase">
                            {AboutProject}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8 w-full md:w-3/6">
                        <div className="mr-0 md:mr-10">
                            <h4 className="text-2xl font-medium mb-4">
                                Challenge
                            </h4>
                            <p className="text-lg font-normal">{Challenge}</p>
                        </div>

                        <div className="mr-0 md:mr-10">
                            <h4 className="text-2xl font-medium mb-4">
                                Approach
                            </h4>
                            <p className="text-lg font-normal">{Approach}</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="p-5 md:p-10">
                <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-medium">{informationArchitecture.heading}</h3>
                    <p className="mt-4 text-sm md:text-base">{informationArchitecture.description}</p>
                    <p className="mt-4 text-sm md:text-base">{informationArchitecture.focus}</p>
                </div>
                <div className="p-4 md:p-6 bg-[#EFEFEC] shadow-lg rounded-lg">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">{siteMapContent.SITEMAP_HEADING}</h2>

                    <div className="mb-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#2D9CDB]">{siteMapContent.OLD_STRUCTURE_HEADING}</h3>
                        <p className="mb-2">{siteMapContent.OLD_STRUCTURE_DESCRIPTION}</p>
                        <img
                            src={siteMapContent.OLD_STRUCTURE_IMAGE}
                            loading="lazy"
                            alt="Old Structure Sitemap"
                            className="w-full h-auto rounded-md"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#2D9CDB]">{siteMapContent.NEW_STRUCTURE_HEADING}</h3>
                        <p className="mb-2">{siteMapContent.NEW_STRUCTURE_DESCRIPTION}</p>
                        <img
                            src={siteMapContent.NEW_STRUCTURE_IMAGE}
                            loading="lazy"
                            alt="New Structure Sitemap"
                            className="w-full h-auto rounded-md"
                        />
                    </div>
                </div>
            </section>

            <section className="p-5 md:p-10">
                <h2 className="text-xl md:text-2xl font-bold mb-4">{visualDesignContent.VISUAL_DESIGN_HEADING}</h2>
                <p className="mb-4 text-sm md:text-base">{visualDesignContent.VISUAL_DESIGN_DESCRIPTION}</p>
                <img
                    src={visualDesignContent.VISUAL_DESIGN_IMAGE}
                    loading="lazy"
                    alt="Visual Design Sample Screens"
                    className="w-full h-auto rounded-md"
                />
            </section>

            <section className="p-5 md:p-10">
                <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4">{methedologiesContent.TESTING_METRICS_HEADING}</h2>
                <p className="mb-4 text-sm md:text-base">{methedologiesContent.TESTING_METRICS_DESCRIPTION}</p>
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
                    <div className="flex flex-col bg-[#EFEFEC] p-4 rounded-3xl">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{methedologiesContent.METHODOLOGIES_HEADING}</h3>
                        <p className="mb-2 text-sm md:text-base">Conducted a variety of testing methodologies, including:</p>
                        <ul className="list-disc list-inside mb-4 ml-5">
                            {methedologiesContent.METHODOLOGIES_LIST.map((methodology, index) => (
                                <li key={index} className="mb-1">{methodology}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col bg-[#EFEFEC] p-4 rounded-3xl">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">{methedologiesContent.KEY_OUTCOMES_HEADING}</h3>
                        <ul className="list-disc list-inside">
                            {methedologiesContent.KEY_OUTCOMES_LIST.map((outcome, index) => (
                                <li key={index} className="mb-1">{outcome}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="my-10">
                    <div className="mb-4">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">{lessonsLearned.title}</h2>
                        <p className="text-lg italic mb-4">{lessonsLearned.publicationStatus}</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">{lessonsLearned.whatIlearned}</h2>
                        <p className="text-sm md:text-base">{lessonsLearned.content}</p>
                    </div>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <NavItem
                        to="/contactme"
                        className="bg-black text-white rounded-full p-2 transition duration-300 hover:bg-gray-500 hover:scale-x-105"
                    >
                        Let’s work together
                    </NavItem>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center min-h-screen">
                <div className={`w-full gap-8 border-t border-b border-grey-800 flex flex-col items-center py-10 md:gap-8 md:py-15 lg:py-20 lg:gap-12 transition-all duration-1000 ${recentProjectsVisible ? 'scale-75 md:scale-80 lg:scale-95' : 'scale-70 md:scale-75 lg:scale-90'}`}>
                    <div className='flex flex-col items-center'>
                        <p className='uppercase font-custom font-medium text-3xl px-10 m-1 md:text-5xl lg:text-7xl'>You May </p>
                        <p className='uppercase font-custom font-medium text-3xl px-10 m-1 md:text-5xl lg:text-7xl'>Also Like</p>
                    </div>
                    <div ref={projectsRef} className={`w-full flex flex-col justify-center items-center gap-10 transition-all duration-1000 ${recentProjectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <ProjectList
                            numberOfCardsToBeRendered={3}
                            RecentProjects={otherProjects}
                        />
                        <CustomButton
                            className='uppercase rounded-full bg-black text-white p-4 font-custom font-medium hover:bg-[#6e6e6b] hover:scale-110 transition-all duration-300'
                            text="View More"
                            to="/portfolio-content"
                        />
                    </div>
                </div>
            </section>

        </main >)
}
export default PBPMProject