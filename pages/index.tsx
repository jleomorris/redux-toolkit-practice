import Head from 'next/head';
import Image from 'next/image';
import homeStyles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className='bg-home_bg h-screen p-24 text-left text-white'>
      <div className='w-2/3'>
        <h1 className='text-9xl my-24 font-bold uppercase'>
          Redux Toolkit Practice
        </h1>
        <h2 className='text-6xl'>
          A number of basic examples where Redux Toolkit is used
        </h2>
      </div>
    </div>
  );
};

export default Home;
