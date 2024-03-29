import React from 'react';
import {useSelector} from "react-redux";

function UserName() {
  const {userName} = useSelector(state => state.user);

  if(!userName) return null;

  return (
    <div className='hidden text-sm font-semibold italic md:block'>
      {userName}
    </div>
  );
}

export default UserName;