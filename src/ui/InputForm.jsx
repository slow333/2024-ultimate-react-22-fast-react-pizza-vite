import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addUser} from "../services/cartSlice.js";

const InputForm = ({children, type, name, title, defaultValue}) => {

  const [value, setValue] = useState(defaultValue);
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
    if(name === 'customer')
      dispatch(addUser(value))
  }

  return (
       <div className='flex flex-col gap-2'>
         <div className='flex flex-col gap-2 mt-3 ms-3 me-6 sm:flex-row sm:items-center'>
           <div className='w-24'>{title}</div>
           <input className="input w-full"
                  type={type} name={name} value={value}
                  onChange={handleChange} required/>
         </div>
         <div className='ms-24'>{children}</div>
       </div>
  );
}

export default InputForm;