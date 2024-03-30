import React from 'react';

const OrderTitle = ({children}) => {
  return (
    <div className='bg-slate-800 text-slate-300 text-xl p-3 rounded-2xl mb-5'>
      {children} </div>
  );
};

export default OrderTitle;
