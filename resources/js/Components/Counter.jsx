import React from 'react'

const Counter = ({counter  = {num: 0, title: 'Testing...', suffix: '+'}}) => {
  return (
      <div className="text-white bg-white/10 max-w-[312px] text-center py-[40px]">
          <h3 className='font-popins font-normal text-5xl text-primary'><span>{counter.num}</span>{counter.suffix}</h3>
          <h4 className='font-lg'>{counter.title}</h4>
      </div>
  );
}

export default Counter

