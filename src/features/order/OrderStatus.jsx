import React from 'react';

const OrderStatus = ({customer, phone, priority, status}) => {
  return (
    <div className='flex justify-between flex-wrap me-3'>
      <h2 className='text-xl font-bold'>
        주문자 : {customer?.toUpperCase()}, 전화번호: {phone}
      </h2>
      <div className='space-x-2'>
        {priority &&
          <span className='bg-red-600 text-sm rounded-full px-3 py-1 text-red-200 uppercase'>Priority</span>}
        <span
          className='bg-slate-600 text-sm rounded-full px-3 py-1 text-slate-300 uppercase'>{status} order</span>
      </div>
    </div>
  );
};

export default OrderStatus;
