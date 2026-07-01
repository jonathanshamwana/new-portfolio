import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Popover } from 'antd';
import peopleData from '../data/people';
import '../index.css';

const popoverStyle = {
  maxWidth: '400px',
};

const People = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-site min-h-screen'>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl mb-8 text-center">People</h1>
        <div
          className="p-6 rounded-xl mb-6 mx-4 md:mx-auto max-w-3xl"
          style={{
            background: 'rgba(165, 186, 161, 0.18)',
            border: '1px solid rgba(165, 186, 161, 0.35)',
          }}
        >
          <p className="text-base text-center italic text-gray-700">
            "Although we can't choose our parents, we can choose whose children we'd like to be." - Seneca
          </p>
        </div>
        <div className="center text-center mb-8">
          <p>I got the idea for this page from <u><a href="https://www.hadardor.com/" target="_blank" rel="noopener noreferrer">Hadar Dor's</a></u> personal site.</p>
          <p>Here are some of the people I (mostly) admire:</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 mt-16">
          {peopleData.map((person, index) => (
            <Popover
              key={index}
              content={person.context}
              trigger={'click'}
              overlayStyle={popoverStyle}
              overlayClassName="custom-popover"
            >
              <div className="bg-white p-4 rounded-md shadow-md text-center cursor-pointer w-full">
                <span className="text-black">
                  {person.name}
                </span>
              </div>
            </Popover>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;
