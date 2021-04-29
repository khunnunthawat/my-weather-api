import React from 'react';

const WeatherNone: React.FC = () => {
  return (
    <div className='pt-4'>
      <div className='p-6 mx-auto bg-white rounded-xl items-center bg-gray-50'>
        <p className='text-center text-gray-500'>No entries !</p>
      </div>
    </div>
  );
};

export default WeatherNone;
