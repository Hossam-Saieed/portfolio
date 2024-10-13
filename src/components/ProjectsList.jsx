import React from "react";
import Card from "./Card";
const ProjectList = ({ RecentProjects, numberOfCardsToBeRendered }) => {
    return (
        <div className={`w-full gap-8 grid ${numberOfCardsToBeRendered > 3 ? "grid-cols-1 md:grid-cols-1 lg:grid-cols-2" : "grid-cols-1 md:grid-col-1 lg:grid-cols-3"}  `}>
            {RecentProjects.map((project, index) => (
                index < numberOfCardsToBeRendered && <Card
                    cardType="vertical"
                    key={index}
                    imgSrc={project.imgSrc}
                    imgAlt={project.imgAlt}
                    cardTitle={project.cardTitle}
                    projectPath={project.projectPath}
                    published={project.published}
                    bgColor1={project.firstBgColor}
                    bgColor2={project.secondBgColor}
                    buttonBgColor={project.buttonBgColor}
                    technologies={project.technologies}
                />

            ))}
        </div>
    );
};

export default ProjectList;
