import React from "react";

function CheckBox({onChange, value}) {
  return (
    <div className='flex items-center justify-start gap-3 mt-3 ps-3'>

      <input
        // className="h-6 w-6 accent-green-200 border-2 border-slate-400/40 rounded-md
        // focus:outline-none focus:ring focus:ring-green-400 focus:ring-offset-2"
        className="form-checkbox text-pink-500 border-2 border-slate-400/40 rounded-md h-6 w-6"
        type="checkbox"
        name="priority"
        id="priority"
        value={value}
        onChange={onChange}
      />
      <label htmlFor='priority' className='italic text-base'>빠른 배달을 원하세요?(추가 비용 발생)</label>
    </div>
  );
}

export default CheckBox;