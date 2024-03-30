import React from 'react';
import {formatCurrency} from "../../utils/helpers.js";

const OrderPrice = ({priorityPrice, orderPrice, priority}) => {
  return (
    <div className='space-y-3 me-3 bg-gray-300 p-4 rounded-lg'>
      <div className='flex'>
        <div className='w-40'>Price pizza</div>
        <div className='text-blue-600 font-bold'>: {formatCurrency(orderPrice)}</div>
      </div>
      {priority &&
        <div className='flex'>
          <div className='w-40'>Price priority</div>
          <div className='text-blue-600 font-bold'>: {formatCurrency(priorityPrice)}</div>
        </div>
      }
      <div className='flex'>
        <div className='w-40'>To pay on delivery</div>
        <div className='text-blue-600 font-bold'>: {formatCurrency(orderPrice + priorityPrice)}</div>
      </div>
    </div>
  );
};

export default OrderPrice;
