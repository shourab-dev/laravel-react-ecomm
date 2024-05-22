import React from 'react'
import Counter from './Counter';

const CustomerCounters = () => {
  return (
      <section className="bg-customer-pattern py-[80px] bg-cover bg-center ">
          <div className="container grid grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            <Counter/>
            <Counter/>
            <Counter/>
            <Counter/>
          </div>
      </section>
  );
}

export default CustomerCounters
