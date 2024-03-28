import { Link } from "react-router-dom"

function Button({children, disabled, to, type, onClick}) {

    const baseStyle = "bg-slate-600 font-semibold rounded-full text-slate-100 inline-block hover:bg-gray-900" +
         " hover:text-slate-300 transition-colors duration-400 focus:outline-none focus:ring focus:ring-slate-400" +
         " focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed uppercase shadow-slate-400 shadow-xl ";
    
    const styles = {
        primary: baseStyle + ' md:px-6 md:py-2 px-4 py-2',
        base: baseStyle + ' py-1 px-3 text-xs md:py-2',
    }

    if(to) return <Link to={to} className={styles.primary}>{children}</Link>
    return (
        <button disabled={disabled} onClick={onClick}
        className={`${type === 'primary' ? styles.primary : styles.base} ${disabled && 'opacity-40'}`}>
            {children}
        </button>
    )
}

export default Button
