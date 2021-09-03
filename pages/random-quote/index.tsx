import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getRandomQuote,
  selectQuote,
} from '../../features/random-quote/randomQuoteSlice';

const RandomQuote: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(selectQuote);

  return (
    <div className='relative'>
      {/* <div className='absolute top-0 left-0 bg-gradient-to-r from-black h-full w-full' /> */}
      <div className='bg-chuck  bg-cover min-h-screen'>
        <div className='h-full w-full p-12 text-right'>
          <h1 className='border-2 mb-24 ml-auto p-3 text-3xl text-white uppercase w-min'>
            Chuck Norris Quote Generator
          </h1>
          {pending && <p>Loading...</p>}
          {data && (
            <h2 className='text-8xl m-auto text-white w-9/12 text-center'>
              "{data.quote}"
            </h2>
          )}
          {error && <p>Oops, something went wrong</p>}
          <button
            onClick={() => dispatch(getRandomQuote())}
            disabled={pending}
            className='py-5 px-10 mt-10 mx-auto block bg-white rounded-full shadow-2xl'
          >
            Generate Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
