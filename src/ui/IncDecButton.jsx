function IncDecButton({children, handleClick}) {
  return (
  <button
    className='w-6 h-6 bg-slate-600 rounded-full text-slate-400 text-3xl/1 font-extrabold'
    onClick={handleClick}>{children}</button>
  )
}

export default IncDecButton;