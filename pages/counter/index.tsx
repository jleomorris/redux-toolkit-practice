import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  reset,
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../../features/counter/counterSlice';

const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <div className='bg-gray-700 h-screen p-24 text-center'>
      <h1 className='text-8xl my-24 font-bold text-white'>Counter redux</h1>
      <h2 className='text-4xl text-white'>
        The current number is{' '}
        <span className='text-yellow-500 font-bold'>{count}</span>
      </h2>
      <div className='mt-20 mb-5'>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type='number'
          className=' mr-5 p-3 shadow-inner w-20'
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
          className='p-5 bg-white rounded-2xl shadow-2xl'
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch(reset())}
          className='p-5 rounded-2xl ml-0 m-5 bg-white shadow-2xl'
        >
          Reset to 0
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className='p-5 rounded-2xl m-5 bg-white shadow-2xl'
        >
          Decrement by 1
        </button>
        <button
          onClick={() => dispatch(increment())}
          className='p-5 rounded-2xl m-5 bg-white shadow-2xl'
        >
          Increment by 1
        </button>
      </div>
    </div>
  );
};

export default Counter;
