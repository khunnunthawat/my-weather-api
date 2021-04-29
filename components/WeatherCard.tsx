import React from 'react';

interface WeatherCardProps {
  card: {
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

const WeatherCard: React.FC<WeatherCardProps> = ({ card }) => {

  const data = card.data;
  let tempx = parseInt(data.main.temp) - 273;
  const dateObj = new Date();
  const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
  
  return (
    <div className='pt-4'>
      <div className='rounded-md lg:w-1/2 m-auto'>
        <div className='flex flex-col flex flex-row mx-2 p-4 justify-start border rounded-md border-blue-300'>
          <div className='text-2xl'>{data.name}</div>
          <div className='text-base'>{`${data.weather[0].main} - ${data.weather[0].description}`}</div>
          <br />
          <div className='font-medium text-5xl'>{`${tempx}°C`}</div>
          <img
            className='h-10 w-10'
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='logo'
          />
          <div className='text-base'>{time}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
