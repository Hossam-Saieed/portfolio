import React from 'react';
import DiamondIcon from '../assets/Vector.svg';
import { homePageSecondSectionSecondText, homePageSecondSectionText, providedServices, recentProjects, recentProjectsTitleFirstPart, recentProjectsTitleSecondPart, whatIcanDoTitle } from '../constants';
import CustomButton from '../components/CustomButton';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ProjectList from '../components/ProjectsList';
import Card from '../components/Card';
import VideoPlayer from '../components/VideoPlayer';
const Home = () => {
  const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: textRef, isVisible: textVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: projectsRef, isVisible: recentProjectsVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <main className="overflow-hidden"> {/* Add overflow-hidden to the main */}
      <section>
        <div className='w-full h-auto'>
          <div className='flex flex-col justify-center items-center'>
            <div className={`transition-all duration-1000 ${videoVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1
                ref={videoRef}
                className="uppercase cursor-default font-custom font-bold hover:font-light duration-200 md:text-7xl lg:text-9xl text-5xl"
              >
                Hossam Saieed
              </h1>
            </div>
            <VideoPlayer url="https://player.vimeo.com/video/1019117291" />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center lg:min-h-screen my-6">
        <div className={`flex flex-col items-center text-center gap-4 max-w-6xl md:gap-6 lg:gap-8 transition-all duration-1000 ${textVisible ? 'scale-95' : 'scale-75'}`}>
          <img src={DiamondIcon} loading="lazy" alt='diamondIcon' className="w-8 lg:w-16" />
          <h1 ref={textRef} className='uppercase font-custom font-medium text-3xl md:text-5xl lg:text-7xl lg:px-10 lg:mx-10'>{homePageSecondSectionText}</h1>
          <img src={DiamondIcon} loading="lazy" alt='diamondIcon' className="w-8 lg:w-16" />
          <h2 className=' mx-10 font-normal text-xl md:mx-20 md:text-2xl lg:mx-52 lg:text-3xl '>{homePageSecondSectionSecondText}</h2>
          <CustomButton
            className='uppercase rounded-full bg-black text-white p-4 font-custom font-medium hover:bg-[#6e6e6b] hover:scale-110 transition-all duration-300'
            text="Learn More"
            to="/about"
          />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center lg:min-h-screen">
        <div className={`w-full gap-8 border-t border-b border-grey-800 flex flex-col items-center py-10 md:gap-8 md:py-15 lg:py-20 lg:gap-12 transition-all duration-1000 ${recentProjectsVisible ? 'scale-75 md:scale-80 lg:scale-95' : 'scale-70 md:scale-75 lg:scale-90'}`}>
          <div className='flex flex-col items-center'>
            <p className='uppercase font-custom font-medium text-3xl px-10 m-1 md:text-5xl lg:text-7xl'>{recentProjectsTitleFirstPart}</p>
            <p className='uppercase font-custom font-medium text-3xl px-10 m-1 md:text-5xl lg:text-7xl'>{recentProjectsTitleSecondPart}</p>
          </div>
          <div ref={projectsRef} className={`w-full flex flex-col justify-center items-center gap-10 transition-all duration-1000 ${recentProjectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <ProjectList
              numberOfCardsToBeRendered={3}
              RecentProjects={recentProjects}
            />
            <CustomButton
              className='uppercase rounded-full bg-black text-white p-4 font-custom font-medium hover:bg-[#6e6e6b] hover:scale-110 transition-all duration-300'
              text="View More"
              to="/portfolio"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-around items-start my-12 min-h-96">
        <h1 className='uppercase font-custom font-medium text-3xl px-10 m-1 md:text-5xl lg:text-7xl'>{whatIcanDoTitle}</h1>
        <div class="flex flex-col lg:flex-row justify-center">
          {providedServices.map((service, index) => (
            <Card
              key={index}
              cardTitle={service.title}
              description={service.description}
              imgSrc={service.image}
              imgAlt={service.title}
              bgColor1="bg-gray-200"
              className="w-full sm:w-1/2 lg:w-1/3"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
