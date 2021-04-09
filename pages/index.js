import Head from 'next/head';
import React from 'react';
import SearchBox from '../components/SearchBox';
import WeatherCard from '../components/WeatherCard';
import WeatherList from '../components/WeatherList';
import WeatherNone from '../components/WeatherNone';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daytech Weather</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-gray-50'>
        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold text-gray-900'>
              Daytech Weather °
            </h1>
            {/* <img src='/img/10d@2x.png' alt='' /> */}
          </div>
        </header>
        <main>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            {/* Replace with your content */}
            <div className='container'>
              <SearchBox />
              <WeatherList />
              <WeatherCard />
              <WeatherNone />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
