import {Link, } from "react-router-dom";
import {useSelector} from "react-redux";

function CartOverview() {

  const {cart} = useSelector(state => state.orderInfo);
  // const order = useLoaderData();
  // console.log(cart)
  const total = cart.map(c => c.totalPrice).reduce((acc, curr) => acc + curr,0);

  return (
    <div className="bg-slate-800 text-stone-200/70 p-1 text-sm mt-5 mb-2
    rounded-md shadow-md  w-[98%]
    sm:p-3 md:text-base
    flex flex-row row-reverse items-center justify-between ">
      <p>
        <span>{cart.length > 0 ? cart.length : "no order"} pizzas </span>
        <span>{cart.customer && cart.customer} </span>
        <span>total : ${total && total}</span>
      </p>
      <Link to='/cart' className="align-end">Open cart &rarr;</Link>

      </div>
  );
}

// export async function loader({params}) {
//   const order = await getOrder(params.orderId);
//   return order;
// }
export default CartOverview;
