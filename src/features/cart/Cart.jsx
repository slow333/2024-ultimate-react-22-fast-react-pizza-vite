/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/helpers";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from '../../features/cart/CartItem'
import {formatCurrency} from "../../utils/helpers.js"


const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const convertedCurrencyCart = cart.map(c => {
    return {
    ...c, totalPrice: Math.round(c.totalPrice * 1000).toFixed(1)
  }})
  const { userName, createdAt } = useSelector((state) => state.userInfo);

  return (
    <div className="px-4 py-3 font-bodyFont">
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <div className="mt-7 text-xl font-bold">
        Your cart, {userName ? userName.toUpperCase() : "No User Info"}
      </div>
      <div className="text-xs mb-5">가입일: {userName ? formatDate(createdAt) : "no data"} </div>

      <ul className="divide-y divide-stone-300 border-2 border-stone-400/30 p-4 rounded-lg">
      {convertedCurrencyCart.map((c) => (
          <CartItem key={c.pizzaId} item={c}/>
      ))}
      </ul>
      <div className="mt-5 mb-8 text-end text-lg font-extrabold">
        총금액 : 
        {formatCurrency(convertedCurrencyCart.reduce((acc, curr) => acc + +curr.totalPrice, 0))}
      </div>

      <div className="flex justify-between">
        <Button to="/order/new">Order pizzas</Button>
        <Button type="small">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
