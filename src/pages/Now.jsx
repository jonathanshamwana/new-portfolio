import React, { useEffect } from 'react';
import Header from '../components/Header';
import items from '../data/now';
import { MapContainer, TileLayer } from 'react-leaflet';

const getTagColor = (tag) => {
  switch (tag) {
    case 'career':
      return 'bg-blue-200 text-blue-800';
    case 'school':
      return 'bg-green-200 text-green-800';
    case 'art':
      return 'bg-pink-200 text-pink-800';
    case 'running':
      return 'bg-yellow-200 text-yellow-800';
    case 'reading':
      return 'bg-purple-200 text-purple-800';
    case 'life':
      return 'bg-teal-200 text-teal-800';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

const Now = () => {

  const center = {
    lat: 37.7694,
    lng: -122.4862,
  };  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-site min-h-screen'>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl mb-8 text-center">Now</h1>
        <h2 className="text-lg mb-4 text-center">I got the idea for this page from <u><a href="https://sive.rs/now" target="_blank" rel="noopener noreferrer">Derek Sivers</a></u>. This is what I'm working on now:</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mx-4 mt-16">
          {items.map((item, index) => (
            <li key={index} className="bg-white p-6 rounded-md shadow-md relative">
              <span className={`absolute top-2 right-2 rounded-full px-3 py-1 text-sm font-semibold ${getTagColor(item.tag)}`}>
                {item.tag}
              </span>
              <p className="text-gray-800 pr-20">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mx-auto py-12 flex justify-center">
        <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%', maxWidth: '900px', borderRadius: '10px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
    
  );
};

export default Now;
