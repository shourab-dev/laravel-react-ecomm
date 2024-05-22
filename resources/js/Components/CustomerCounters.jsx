import React from 'react'
import Counter from './Counter';

const CustomerCounters = () => {
  return (
      <section className="bg-customer-pattern py-[80px] bg-cover bg-center ">
          <div className="container grid grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            <Counter counter={{ num:37,title:'Years of Hard Work', suffix:'+', }}/>
            <Counter counter={{ num:500,title:'Happy Customer', suffix:'k+', }}/>
            <Counter counter={{ num:28,title:'Qualified Team Member', suffix:'', }}/>
            <Counter counter={{ num:750,title:'Monthly Orders', suffix:'k+', }}/>
          </div>
      </section>
  );
}

export default CustomerCounters
