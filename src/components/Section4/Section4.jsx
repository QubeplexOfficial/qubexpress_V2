import React from "react";
import BackgroundImage from '../../assets/courier.png';
import BackgroundImageMobile from '../../assets/courier_mobile.png';

const HeroSection = () => {
  return (
    <>
      <div 
        className="hidden md:block w-full h-[500px] bg-cover bg-bottom" 
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
      </div>
      <div 
        className="md:hidden w-full h-[600px] bg-cover bg-bottom" 
        style={{ backgroundImage: `url(${BackgroundImageMobile})` }}
      >
      </div>
    </>
  );
};

export default HeroSection;
