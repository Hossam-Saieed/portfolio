import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { contactFormSectionTitle, contactMeDescription, ContactMeSecondSectionTitle, contactMeSlogan, contactMeTitle, contactMeWays } from '../constants';
import HossamContactMe from '../assets/newHossamContactMe.jpg';
import contactMeBesideForm from '../assets/contactMeBesideForm.jpg';
import DiamondIcon from '../assets/Vector.svg';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';

const ContactMe = () => {
  const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <main>
      <section className="w-full h-auto overflow-hidden my-10">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-2/3 flex flex-col justify-center items-start p-5 md:p-10">
            <div className={`transition-all duration-1000 ${videoVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1 ref={videoRef} className="uppercase cursor-default font-custom font-medium text-5xl md:text-9xl mb-8">
                {contactMeTitle}
              </h1>
              <div className='pr-0 md:pr-48'>
                <p className="uppercase font-normal text-xl md:text-3xl">{contactMeDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-8">
          <img src={HossamContactMe} loading="lazy" alt="Hossam IMG" className="w-full object-cover rounded-3xl" />
        </div>
      </section>

      <section className="w-full h-auto overflow-hidden my-36 px-5 md:px-10">
        <div className='flex flex-col items-center'>
          <h1 className="uppercase cursor-default text-center font-custom font-medium text-4xl md:text-6xl mb-10">
            {ContactMeSecondSectionTitle}
          </h1>
        </div>
        <div className='flex flex-col md:flex-col lg:flex-row'>
          {contactMeWays.map((way, index) => (
            <Card
              key={index}
              cardType="verticalSmall"
              cardTitle={way.title}
              description={way.description}
              imgSrc={way.image}
              imgAlt={`${way.title} img`}
              bgColor1="bg-[#E6E6E3]"
              onClick={() => window.open(way.link, "_blank")}
            />
          ))}
        </div>
      </section>

      <section className="w-full h-auto overflow-hidden my-36">
        <div className='flex justify-center items-center'>
          <h1 className='uppercase cursor-default text-center font-custom font-medium text-4xl md:text-6xl mb-10'>
            {contactFormSectionTitle}
          </h1>
        </div>
        <div className='flex flex-col md:flex-col lg:flex-row justify-between'>
          <div className='p-5 md:p-10 bg-black rounded-3xl flex flex-col justify-center'>
            <ContactForm />
          </div>
          <img className='w-full lg:w-2/3 rounded-3xl' src={contactMeBesideForm} loading="lazy" alt='cubes-img' />
        </div>
      </section>

      <section className="w-full h-auto overflow-hidden my-36">
        <div className='flex flex-col justify-center items-center m-5 p-10'>
          <img src={DiamondIcon} loading="lazy" alt="" className="w-12 h-12 mb-10" />
          <h1 className='uppercase cursor-default text-center font-custom font-medium text-5xl md:text-7xl mb-10'>
            {contactMeSlogan}
          </h1>
        </div>
      </section>
    </main>
  );
};

export default ContactMe;
