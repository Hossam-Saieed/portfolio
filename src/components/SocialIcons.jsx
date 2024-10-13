import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex justify-center space-x-4 mt-4">
      <FontAwesomeIcon 
        icon={faWhatsapp} 
        className="text-white opacity-70 text-2xl cursor-pointer hover:text-green-500"
        onClick={() => openLink('https://wa.me/+201126260430')}
      />
      <FontAwesomeIcon 
        icon={faInstagram} 
        className="text-white opacity-70 text-2xl cursor-pointer hover:text-pink-500"
        onClick={() => openLink('https://www.instagram.com/hossam.saieed/profilecard/')}
      />
      <FontAwesomeIcon 
        icon={faLinkedin} 
        className="text-white opacity-70 text-2xl cursor-pointer hover:text-blue-700"
        onClick={() => openLink('https://www.linkedin.com/in/hossam-saieed-56ba37207/')}
      />
      <FontAwesomeIcon 
        icon={faBehance} 
        className="text-white opacity-70 text-2xl cursor-pointer hover:text-blue-400"
        onClick={() => openLink('https://www.behance.net/hossam-Saieed')}
      />
    </div>
  );
};

export default SocialIcons;
