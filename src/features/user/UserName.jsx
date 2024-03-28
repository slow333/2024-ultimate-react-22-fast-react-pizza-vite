import React, {Component} from 'react';
import {useSelector} from "react-redux";

function UserName() {
  const {customer} = useSelector(state => state.orderInfo);

  return (
    <div className='text-sm font-semibold italic'>
      {customer}
    </div>
  );
}

export default UserName;