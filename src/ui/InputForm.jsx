import React from 'react';

const InputForm = ({children, type, name, title}) => {
  return (
       <div className='flex flex-col gap-2'>
         <div className='flex flex-col gap-2 mt-3 ms-3 me-6 sm:flex-row sm:items-center'>
           <div className='w-24'>{title}</div>
           <input className="input w-full"
                  type={type} name={name} required/>
         </div>
         <div className='ms-24'>{children}</div>
       </div>
  );
}

export default InputForm;