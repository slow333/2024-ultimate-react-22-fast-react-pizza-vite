import {Link} from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-slate-800 text-stone-200/70 p-1  text-sm
    rounded-md shadow-md  sm:p-3 md:text-base w-[98%] 
    flex flex-row row-reverse items-center justify-between absolute bottom-1">
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart' className="align-end">Open cart &rarr;</Link>

      </div>
  );
}

export default CartOverview;
