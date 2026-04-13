import React from 'react';

const ArtworkCard = ({ project, onClick }) => (
  <div
    className={`relative shadow-lg p-4 opacity-50 rounded-md h-80 flex items-center justify-center transform transition-transform hover:scale-[1.01] cursor-pointer ${project.size}`}
    style={{ 
      backgroundImage: `url(${project.image})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }}
    onClick={onClick}
  >
    <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
    <p className="relative text-2xl text-white text-center">{project.title}</p>
  </div>
);

export default ArtworkCard;
