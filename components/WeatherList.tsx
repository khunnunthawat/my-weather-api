import React from 'react';
import WeatherCard from './WeatherCard';
import WeatherNone from './WeatherNone';

interface weathersList {
  clearSubmit: () => void;
  weathers: {
    length: number;
    id: number;
    data: {
      name: string;
      weather: {
        main: string;
        description: string;
        icon: string;
      }[];
      main: {
        temp: string;
      };
      time: string;
    }; //{}[] >> [{1,"sdsad"}, {...}]; ,  string[] >> ["cx", "sdasd"]
  };
}

const WeatherList: React.FC<weathersList> = ({ weathers, clearSubmit }) => {
  let listOfWeathers: JSX.Element | JSX.Element[] = <WeatherNone />;
  if (weathers.length > 0) {
    listOfWeathers = weathers.map((card) => {
      return <WeatherCard key={card.id} card={card} />;
    });
  }
  // console.log('ss'+weathers);
  

  return (
    <>
      <div className='w-4/5 md:w-3/5 lg:w-1/2 m-auto'>
        <div className='flex flex-row mx-4 p-2 justify-start mt-2'>
          <h1 className='text-sm mr-72 ml-3'>
            Recent Search: {weathers.length}
          </h1>
          <button
            onClick={() => clearSubmit()}
            type='button'
            className='px-6 py-1 text-sm text-gray-800 font-normal rounded-sm border border-gray-800 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4'
          >
            Clear
          </button>
        </div>
      </div>
      {listOfWeathers}
    </>
  );
};

export default WeatherList;