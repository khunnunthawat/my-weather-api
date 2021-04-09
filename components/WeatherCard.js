import React from 'react';

const WeatherCard = () => {
  return (
    <div className='pt-8'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 shadow-lg rounded-lg'>
          <div className='flex flex-row justify-between items-center bg-white shadow-sm rounded rounded-lg p-8'>
            <div className='flex flex-col'>
              <div className='text-2xl'>Bangkok</div>
              <div className='text-base'>Rain - Moderate</div>
              <br />
              <div className='font-medium text-5xl'>28 °C</div>
            </div>
            <div className='flex flex-col'>
              <div className='icons'>
                <img
                  className='text-2xl'
                  src='/img/weather-svgrepo-com.svg'
                  alt='logo'
                  width='80'
                />
              </div>
              <div className='text-base'>17:00 AM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
