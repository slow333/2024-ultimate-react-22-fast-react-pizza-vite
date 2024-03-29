/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useLoaderData } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from '../../features/cart/CartItem'
import {formatCurrency} from "../../utils/helpers.js"
import {getMenu} from "../../services/apiRestaurant.js";
import {clearCart, deleteItem, getCart} from "./cartSlice.js";
import {getUsername} from "../user/userSlice.js";
import EmptyCart from "./EmptyCart.jsx";

function Cart() {
  const menu = useLoaderData();
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  if(!cart.length) return <EmptyCart/>

  return (
    <div className="px-4 py-3 font-bodyFont">
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <div className="mt-7 text-xl font-bold">
        {'Welcome ' + username.toUpperCase()}
      </div>

      <ul className="divide-y divide-stone-300 border-2 border-stone-400/30 p-4 rounded-lg">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item}/>
        ))}
      </ul>
      <div className="mt-5 mb-8 text-end text-lg font-extrabold">
        총금액 :
        {formatCurrency(cart.reduce((acc, curr) => acc + +curr.totalPrice, 0), 1000)}
      </div>

      <div className="flex justify-between border-2 border-b-slate-500/40 pb-3">
        <Button to="/order/new" type='primary'>Order pizzas</Button>
        <Button type="base" onClick={() => dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Cart;