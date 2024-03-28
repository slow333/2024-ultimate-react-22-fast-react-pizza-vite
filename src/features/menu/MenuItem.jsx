/* eslint-disable react/prop-types */
// noinspection JSCheckFunctionSignatures

import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {useDispatch, useSelector} from "react-redux";
import {addCart} from "../../services/cartSlice.js";
import {useState} from "react";

function MenuItem({ pizza }) {
  // console.log(pizza)
  const { id: pizzaId, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const order = {
    pizzaId, name, quantity: 1, unitPrice, totalPrice: 0,
    ingredients, };

  function handleClick(e) {
    e.preventDefault();
    dispatch(addCart(order))
  }

  // console.log(useSelector(stat => stat.cart))
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} 
       className={`h-28 ${soldOut ? 'opacity-60 grayscale' : ''} rounded-full`}/>
      <div className="flex flex-col grow">
        <p className="font-medium ">{name}</p>
        <p className="text-sm italic text-slate-500 capitalize">
          {ingredients.join(", ")}</p>
        <div className="mt-auto flex justify-between items-center ">
          {!soldOut ? <p>{formatCurrency(unitPrice, 1000)}</p>
          : <p className="text-sm uppercase font-medium text-slate-500">Sold out</p>}
          <Button type='small' disabled={soldOut} onClick={handleClick}>Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
