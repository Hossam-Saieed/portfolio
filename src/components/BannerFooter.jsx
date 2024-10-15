import React from "react";
import { bannerFooterFirstText, bannerFooterSecondText } from "../constants";
import NavItem from "./NavItem";
import Vector from '../assets/Vector.svg';
// import footerBG from '../assets/footerBG.png';

const BannerFooter = () => {
    return (
        <section className="relative mt-36">
            {/* <img
                className="rounded-3xl w-full h-auto" // Ensure the image is responsive
                src={footerBG}
                loading="lazy"
                alt="background-img"
            /> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-2 md:gap-4 lg:gap-12">
                <img src={Vector} loading="lazy" alt="diamondIcon" className="w-8 lg:w-16" />
                <h2 className="uppercase font-custom font-medium text-2xl md:text-5xl lg:text-7xl px-5 md:px-10 lg:px-20">
                    {bannerFooterFirstText}
                </h2>
                <p className="font-normal text-lg md:text-2xl lg:text-5xl mx-4 md:mx-8 lg:mx-40">
                    {bannerFooterSecondText}
                </p>
                <NavItem
                    to="/contactme"
                    classname="bg-white text-black rounded-full py-3 px-6 transition duration-300 hover:bg-gray-300 text-lg md:text-xl" // Responsive text size
                >
                    Contact Me
                </NavItem>
            </div>
        </section>
    );
};

export default BannerFooter;
