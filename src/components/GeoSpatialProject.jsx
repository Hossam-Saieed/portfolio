import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { AboutProject, GEOSpatialTitle, recentProjects } from "../constants";
import MainGeoSpatialImg from "../assets/geoSpatial.svg"
import NavItem from "./NavItem";
import ProjectList from "./ProjectsList";
import CustomButton from "./CustomButton";

const GeoSpatialProject = () => {
    const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({ threshold: 0.2 });
    const { ref: projectsRef, isVisible: recentProjectsVisible } = useIntersectionObserver({ threshold: 0.2 });

    const { technologies, Challenge, Approach, aboutTheProjectDetails, secondSection, visualDesignContent } = recentProjects.filter((project) => project.projectPath === "geo-spatial")[0];
    const otherProjects = recentProjects.filter((project) => project.projectPath !== "geo-spatial");

    return (
        <main>
            <section className="w-full h-auto overflow-hidden my-10">
                <div className="flex flex-col md:flex-row w-full">
                    {/* Left section: Title and description */}
                    <div className="sm:w-full md:w-2/3 lg:w-2/3 flex flex-col justify-center items-start p-5 md:p-10">
                        <div
                            className={`transition-all duration-1000 ${videoVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                        >
                            <h1
                                ref={videoRef}
                                className="uppercase cursor-default font-custom font-medium text-4xl sm:text-5xl md:text-6xl lg:text-9xl w-full mb-4"
                            >
                                {GEOSpatialTitle}
                            </h1>
                            <div className="flex flex-wrap gap-1">
                                {technologies.map((tech, index) => (
                                    <button
                                        key={index}
                                        title={tech}
                                        className={`uppercase rounded-full font-medium flex flex-wrap gap-2 text-xs px-4 py-2 ${index > 0 ? "border-2 border-[#12120F80]" : "bg-[#12120F80] text-white"}`}
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

                <div className="flex justify-center w-full mt-8 bg-[#DDEA64] pt-10 rounded-3xl">
                    <img
                        src={MainGeoSpatialImg}
                        loading="lazy"
                        alt="MainPBMImage"
                        className="w-4/5 object-cover h-auto"
                    />
                </div>
            </section>

            <section className="p-5 md:p-10">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-2/6 mb-4 md:mb-0">
                        <h2 className="text-4xl md:text-6xl font-medium uppercase ">
                            {AboutProject}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-8 w-full md:w-3/6">
                        <div className="mr-10">
                            <h4 className="text-2xl font-medium mb-4">Challenge</h4>
                            <p className="text-lg font-normal">{Challenge}</p>
                        </div>

                        <div className="mr-10">
                            <h4 className="text-2xl font-medium mb-4">Approach</h4>
                            <p className="text-lg font-normal">{Approach}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between mt-20">
                    {Object.entries(aboutTheProjectDetails).map(([key, value]) => (
                        <div className="flex flex-col" key={key}>
                            <h4 className="font-medium text-2xl">{key}</h4>
                            <p className="font-normal text-lg">{value}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="p-5 md:p-10">
                <div className="flex flex-col md:flex-row justify-between gap-10 my-20">
                    {Object.entries(secondSection).map(([key, value]) => (
                        <div key={key} className="flex flex-col w-full md:w-3/5 mb-10 md:mb-0">
                            <h3 className="font-medium text-3xl mb-4">{key}</h3>
                            {Array.isArray(value) ? (
                                value.map((item, index) => (
                                    <div className="mr-20" key={index}>
                                        {typeof item === 'string' ? (
                                            <ul className={`${index > 0 ? "list-disc ml-6" : ""}`}>
                                                <li>{item}</li>
                                            </ul>
                                        ) : (
                                            Object.entries(item).map(([subKey, subValue]) => (
                                                <ul key={subKey}>
                                                    <li className="list-disc ml-6 text-[#2D9CDB]">
                                                        <span className="text-[#2D9CDB] font-normal text-lg">
                                                            {subKey}
                                                        </span>
                                                        <span className="text-black">: {subValue}</span>
                                                    </li>
                                                </ul>
                                            ))
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>{value}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className="p-5 md:p-10">
                    <h2 className="text-2xl font-bold mb-4">{visualDesignContent.VISUAL_DESIGN_HEADING}</h2>
                </div>
                <img
                    src={visualDesignContent.VISUAL_DESIGN_IMAGE}
                    loading="lazy"
                    alt="Visual Design Sample Screens"
                    className="w-full h-auto rounded-md my-10"
                />
                <img
                    src={visualDesignContent.PROPOSAL_ONE}
                    loading="lazy"
                    alt="Colors Sample Screens"
                    className="w-full h-auto rounded-md my-10"
                />
                <img
                    src={visualDesignContent.PROPOSAL_TWO}
                    loading="lazy"
                    alt="Proto-type Sample Screens"
                    className="w-full h-auto rounded-md my-10"
                />
                <div className='flex items-center justify-center mt-4 p-20'>
                    <NavItem
                        to="/contactme"
                        classname="bg-black text-white rounded-full p-2 transition duration-300 hover:bg-gray-500 hover:scale-x-105"
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
                            to="/portfolio"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default GeoSpatialProject;
