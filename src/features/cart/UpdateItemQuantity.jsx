import React from 'react';
import Button from "../../ui/Button.jsx";
import {decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity} from "./cartSlice.js";
import {useDispatch, useSelector} from "react-redux";

const UpdateItemQuantity = ({pizzaId, currentQuantity}) => {

  const dispatch = useDispatch();

  return (
    <div className='flex gap-2 items-center'>
      <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))} type='round'>-</Button>
      {currentQuantity}
      <Button onClick={() => dispatch(increaseItemQuantity(pizzaId))}  type='round'>+</Button>
    </div>
  );
};

export default UpdateItemQuantity;
