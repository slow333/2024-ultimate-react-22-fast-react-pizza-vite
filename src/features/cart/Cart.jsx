/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/helpers";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from '../../features/cart/CartItem'
import {formatCurrency} from "../../utils/helpers.js"


function Cart() {
  const {cart, customer} = useSelector(state => state.orderInfo);

  return (
    <div className="px-4 py-3 font-bodyFont">
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <div className="mt-7 text-xl font-bold">
        {customer ? 'Welcome ' + customer.toUpperCase() : "No User Info"}
      </div>

      <ul className="divide-y divide-stone-300 border-2 border-stone-400/30 p-4 rounded-lg">
      {cart.map((c) => (
          <CartItem key={c.pizzaId} item={c}/>
      ))}
      </ul>
      <div className="mt-5 mb-8 text-end text-lg font-extrabold">
        총금액 : 
        {formatCurrency(cart.reduce((acc, curr) => acc + +curr.totalPrice, 0), 1000)}
      </div>

      <div className="flex justify-between border-2 border-b-slate-500/40 pb-3">
        <Button to="/order/new">Order pizzas</Button>
        <Button type="small">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
