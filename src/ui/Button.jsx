import {Link} from "react-router-dom"

function Button({children, disabled, to, type, onClick}) {

  const baseStyle = " font-semibold rounded-full text-slate-100 inline-block  transition-colors duration-400 focus:outline-none focus:ring focus:ring-slate-400  focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed uppercase shadow-slate-400 shadow-xl ";
  const styles = {
    base: baseStyle + ' bg-slate-600 py-1 px-3 text-xs hover:bg-gray-900  hover:text-slate-300 md:py-2',
    primary: baseStyle + ' bg-blue-600 md:px-6 hover:bg-blue-900  hover:text-slate-200 md:py-2 px-4 py-2',
    secondary: baseStyle + " bg-slate-600 md:px-4 hover:bg-gray-900 hover:text-slate-300 md:py-2 px-4 py-2",
    delete: baseStyle + ' bg-red-600 py-1 px-5 text-xs md:py-2 hover:bg-red-900  hover:text-red-200',
    round: baseStyle + ' bg-slate-600 rounded-full text-slate-100 text-sm font-bold hover:bg-gray-900  hover:text-slate-300 md:px-2.5 md:py-1'
  }

  if (to) return (
    <Link to={to} className={styles[type]}>{children}</Link>
  )

  if (onClick) return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  )

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}

export default Button
