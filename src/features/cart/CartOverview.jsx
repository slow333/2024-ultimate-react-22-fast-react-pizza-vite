import {Link,} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTotalCartPrice, getTotalCartQuantity} from "./cartSlice.js";
import {formatCurrency} from "../../utils/helpers.js";

function CartOverview() {

  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const username = useSelector(state => state.user.userName);

  if(!totalCartQuantity) return null;

  return (
    <div className="bg-slate-800 text-stone-200/70 p-1 text-sm mt-5 mb-2
    rounded-md shadow-md  w-[98%] fixed bottom-0
    sm:p-3 md:text-base
    flex flex-row row-reverse items-center justify-between ">
      <p>
        <span>{totalCartQuantity} pizzas </span>
        <span>{username} </span>
        <span>total price: {formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to='/cart' className="align-end">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
