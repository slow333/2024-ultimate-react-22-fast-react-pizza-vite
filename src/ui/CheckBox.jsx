function CheckBox({handleChange, value}) {
    return ( 
        <input
          className="appearance-none h-6 w-6 accent-green-200 border-2 border-slate-400/40 rounded-md
          focus:outline-none focus:ring focus:ring-green-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            value={value}
            onChange={handleChange}
          />
     );
}

export default CheckBox;