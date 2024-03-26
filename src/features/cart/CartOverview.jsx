import {Link} from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-600 text-stone-200/70 p-1 
    sm:p-3 text-sm md:text-base flex items-center justify-between">
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
