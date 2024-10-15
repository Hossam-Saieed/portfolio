import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
// import firstAboutImg from '../assets/firstAbout.jpg';
// import AHR from '../assets/AHR.jpg';
// import Group from '../assets/Group.jpg';
// import Pentab from '../assets/Pentab.jpg';
import {
  aboutDescription,
  aboutTitle,
  companyName,
  hossamSignature,
  lastPositionDescription,
  lastPositionTitle,
  positionDuration,
  positionDuties,
  positionDutiesExamples,
  positionTitle,
  secondSectionAbout,
  statistics,
  statisticsCaption,
  statisticsTitle,
  valuedClients
} from "../constants";
import DiamondIcon from '../assets/Vector.svg';
import Card from "../components/Card";
import VideoPlayer from "../components/VideoPlayer";
const About = () => {
  const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <main>
      <section className="w-full h-auto overflow-hidden my-10">
        <div className="flex flex-col md:flex-row w-full">

          {/* Left section: Title and description */}
          <div className="sm:w-2/3 md:w-2/3 lg:w-2/3 flex flex-col justify-center items-start p-10">
            <div
              className={`transition-all duration-1000 ${videoVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
                }`}
            >
              <h1
                ref={videoRef}
                className="uppercase cursor-default font-custom font-medium text-5xl md:text-9xl mb-6"
              >
                {aboutTitle}
              </h1>
              <p className="uppercase font-normal text-lg md:text-2xl w-full md:w-2/3 pr-0 md:pr-20">{aboutDescription}</p>
            </div>
          </div>

        </div>

        {/* Images below the content */}
        <div className="flex flex-col md:flex-row w-full mt-8">
          <img
            src="https://i.postimg.cc/vZxQczpm/first-About.jpg"
            loading="lazy"
            alt="Hossam IMG"
            className="rounded-3xl w-full object-cover"
          />
        </div>
      </section>

      <section className="w-full h-auto overflow-hidden mt-36">
        <div className="flex flex-col p-10">
          <div className="text-3xl md:text-5xl font-normal w-full md:w-2/3 mb-6">{secondSectionAbout}</div>
          <div className="text-gray-600 text-lg md:text-2xl font-custom font-medium">{hossamSignature}</div>
        </div>
      </section>

      {/* Tech stack section */}
      <section className="bg-black px-6 md:px-10 py-16 md:py-32 mt-36 rounded-3xl">
        <div className="container mx-auto mb-20 px-4">
          <div className="flex flex-col items-center pb-16 border-b border-gray-800">
            <img
              src={DiamondIcon}
              loading="lazy"
              alt=""
              className="w-12 h-12 mb-10"
            />
            <div className="max-w-3xl text-center">
              <h2 className="text-white text-4xl md:text-6xl font-custom font-medium uppercase mb-6">{statisticsTitle}</h2>
              <p className="text-[#F8F8F599] text-lg md:text-3xl font-light max-w-xl mx-auto mb-6">
                {statisticsCaption}
              </p>
            </div>
          </div>

          {/* Statistics Wrapper */}
          {statistics.map((statistic, index) => (
            <Card
              cardType="about"
              key={index}
              cardTitle={statistic.title}
              description={statistic.description}
            />
          ))}
        </div>

        <div className="flex flex-col items-center pb-16 border-b border-[#E6E6E3]">
          <img
            src={DiamondIcon}
            loading="lazy"
            alt=""
            className="w-12 h-12 mb-10"
          />
          <h2 className="text-white text-4xl md:text-6xl font-custom font-medium uppercase mb-6">{lastPositionTitle}</h2>
        </div>

        <div className="flex flex-col md:flex-row mt-10 gap-4 md:gap-20">
          <div className="w-full md:w-2/3 flex flex-col">
            <div className="flex flex-col md:flex-row items-end">
              <h2 className="text-white text-5xl md:text-7xl font-normal"> {positionTitle} </h2>
              <p className="text-white text-xl md:text-3xl font-medium">{companyName}</p>
            </div>
            <p className="text-white font-custom text-lg font-medium py-4">{positionDuration}</p>
            <div className="flex flex-col justify-between items-start my-4">
              <p className="text-white font-medium text-3xl">{positionDuties}</p>
              <ul className="flex flex-wrap gap-2 text-center my-4">
                {positionDutiesExamples.map((duity, index) => (
                  <li className="whitespace-nowrap flex items-center justify-center text-white uppercase rounded-full text-sm px-4 py-2 border-2 border-[#E6E6E3]" key={index}>
                    {duity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex items-center px-4">
            <p className="text-lg text-start text-[#F8F8F599] font-custom font-normal">{lastPositionDescription}</p>
          </div>
        </div>
      </section>
      <section>
        <VideoPlayer url="https://player.vimeo.com/video/1019117050" />
      </section>
      <section className="w-full h-auto overflow-hidden my-36 px-6 md:px-10">
        <div className="flex flex-col">
          <div className="flex justify-center items-center">
            <p className="font-custom font-medium text-5xl md:text-6xl uppercase mb-12">{valuedClients}</p>
          </div>
          <div className="flex flex-col items-center border-y-2 p-10 border-[#E6E6E3] md:flex-col lg:flex-row justify-center gap-16">
            {/* Insert client logos here */}
            <img src="https://i.postimg.cc/J0T1Bdrs/AHR.png" loading="lazy" alt="Client 1" className="w-2/3  md:w-1/12 lg:w-1/12 h-full object-fit" />
            <img src="https://i.postimg.cc/wTGqqP4P/Group.png" loading="lazy" alt="Client 2" className="w-2/3  md:w-1/12 lg:w-1/12 h-full object-fit" />
            <img src="https://i.postimg.cc/LX2RQMhq/Pentab.png" loading="lazy" alt="Client 3" className="w-2/3  md:w-1/12 lg:w-1/12 h-full object-fit" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
