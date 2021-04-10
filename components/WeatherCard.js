import React, { useState } from 'react';

const WeatherCard = ({ card }) => {
  const data = card.data;
  console.log(data, 'x');
  return (
    <div className='pt-8'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 shadow-lg rounded-lg'>
          <div className='flex flex-row justify-between items-center bg-white shadow-sm rounded rounded-lg p-8'>
            <div className='flex flex-col'>
              <div className='text-2xl'>{data.name}</div>
              <div className='text-base'>{`${data.weather[0].main} - ${data.weather[0].description}`}</div>
              <br />
              <div className='font-medium text-5xl'>{`${data.main.temp} °C`}</div>
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
              <div className='text-base'>{data.time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;