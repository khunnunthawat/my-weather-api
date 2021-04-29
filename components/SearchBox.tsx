import React, { useState } from 'react';

interface SearchBoxProps {
  searchCity: (value: string) => void;
}

const SearchBox: React.FC <SearchBoxProps> = ({ searchCity }) => {
  const [value, setValue] = useState('');

  const onSubmit = (value: string) => {
    searchCity(value);
    setValue('');
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='w-4/5 md:w-3/5 lg:w-1/2 m-auto'>
          <div className='flex flex-row mx-2 justify-start border rounded-md border-blue-300'>
            <input
              type='search'
              role='search'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='Search for a location...'
              className='w-48 md:w-96 mr-12 ml-4 outline-none placeholder-gray-500'
            />
            <button
              onClick={() => onSubmit(value)}
              type='button'
              className='px-6 py-3 text-blue-500 font-bold rounded hover:text-gray-900 hover:border-transparent focus:outline-none'
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
