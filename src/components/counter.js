import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';
const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
    
  return (
    <div className='h-10 w-32'>
        <label className='max-w-full block text-sm font-semibold'>Counter App</label>
        <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
            <button className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400
            h-full w-20 rounded-l cursor-pointer outline-none' onClick={() => dispatch(decrement())}>
                <span className='m-auto text-2xl font-thin'>-</span>
            </button>
            <input className='focus:outline-none text-center w-full bg-gray-300 font-semibold' type='text' readOnly value={count}></input>
            <button className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400
            h-full w-20 rounded-r cursor-pointer outline-none' onClick={() => dispatch(increment())}>
                <span className='m-auto text-2xl font-thin'>+</span>
            </button>
        </div>
    </div>
  )
}

export default Counter