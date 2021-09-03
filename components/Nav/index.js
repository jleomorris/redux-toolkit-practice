import Link from 'next/link';

const Nav = () => {
  return (
    <div className='w-screen bg-black bg-opacity-20 absolute left-0 top-0 z-10 text-white flex justify-center items-center'>
      <div className='w-1/2 flex justify-center items-center space-x-10 uppercase tracking-widest'>
        <Link href='/'>
          <a className='py-2 px-5 my-5'>Home</a>
        </Link>
        <Link href='/counter' className='py-2 px-5 my-5'>
          <a className='py-2 px-5 my-5'>Counter</a>
        </Link>
        <Link href='/random-quote' className='py-2 px-5 my-5'>
          <a className='py-2 px-5 my-5'>Random Quote</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
