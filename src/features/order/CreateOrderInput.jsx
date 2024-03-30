import React from 'react';
import {updatePhone} from "../user/userSlice.js";

const CreateOrderInput = ({children, onChange, value , label, type, name, disabled}) => {
  if(name === 'address') return (
      <div className='flex flex-col gap-2 mt-3 ms-3 me-6 sm:flex-row sm:items-center'>
        <div className='w-24'>{label}</div>
        <input className="input w-full"
               type={type} name={name}
               defaultValue={value}
               disabled={disabled}
               onChange={onChange}
               required/>
        <span className='absolute right-[39px]'>{children}</span>
      </div>
  )
  return (
    <div>
      <div className='flex flex-col gap-2 mt-3 ms-3 me-6 sm:flex-row sm:items-center'>
        <div className='w-24'>{label}</div>
        <input className="input w-full"
               type={type} name={name}
               value={value}
               onChange={onChange}
               required/>
      </div>
      <div className='ms-24'>{children}</div>
    </div>
  );
};

export default CreateOrderInput;
