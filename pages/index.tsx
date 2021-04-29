import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import WeatherList from '../components/WeatherList';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Home() {
  const [weathers, setWeathers] = useState<
    {
      id: number;
      time: string;
      data: any;
      temp: number;
    }[]
  >([]);
  const [value, setValue] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    // console.log(weathers);
  }, [weathers]);

  const searchCity = async (value: string) => {
    setValue(value);

    try {
      const url =
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        value +
        '&appid=2c486a422a8abed95fca0bbd2c35fc80';

      const { data } = await axios.get(url);
      // console.log(data);

      setData(data);

      const id = Math.floor(Math.random() * 10000) + 1;
      const dateObj = new Date();
      const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
      const temp = parseInt(data.main.temp) - 273;
      const newCard = { id, time, data, temp };

      setWeathers([newCard, ...weathers]);
    } catch {
      Swal.fire({
        title: 'Error',
        text: 'City not found!',
        icon: 'error',
        confirmButtonText: 'ok',
      });
    }
  };

  const clearSubmit = () => {
    // clear all history
    setWeathers([]);
  };

  return (
    <>
      <Head>
        <title>Daytech Weather</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='mb-4 bg-blue-600'>
        <div className='2xl:max-w-6xl xl:max-w-4xl lg:max-w-4xl md:max-w-2xl mx-auto sm:px-6 md:px-0 lg:px-2 xl:px-0'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='absolute inset-y-0 left-0 flex items-center'>
              <h1 className='text-white text-xl font-bold'>
                Daytech Weather °
              </h1>
            </div>
          </div>
        </div>
      </nav>
      <main className='my-1'>
        <div className='mx-auto w-5/6 md:w-full 2xl:max-w-7xl xl:max-w-6xl'>
          <SearchBox searchCity={searchCity} />
          <WeatherList weathers={weathers} clearSubmit={clearSubmit} />
        </div>
      </main>
    </>
  );
}
