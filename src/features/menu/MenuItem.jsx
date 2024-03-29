/* eslint-disable react/prop-types */
// noinspection JSCheckFunctionSignatures

import Button from "../../ui/Button";
import {formatCurrency} from "../../utils/helpers";
import {useDispatch, useSelector} from "react-redux";
import {addItem, getCurrentQuantityById} from "../cart/cartSlice.js";
import DeleteItem from "../cart/DeleteItem.jsx";
import UpdateItemQuantity from "../cart/UpdateItemQuantity.jsx";

function MenuItem({pizza}) {
  const dispatch = useDispatch();
  const {id, name, unitPrice, ingredients, soldOut, imageUrl} = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id, name, quantity: 1, unitPrice, totalPrice: unitPrice * 1
    };
    dispatch(addItem(newItem))
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name}
           className={`h-28 w-28 ${soldOut ? 'opacity-60 grayscale' : ''} rounded-full`}/>
      <div className="flex flex-col grow">
        <p className="font-medium ">{name}</p>
        <p className="text-sm italic text-slate-500 capitalize">
          {ingredients.join(", ")}</p>
        <div className="mt-auto flex justify-between items-center ">
          {!soldOut
            ? <p>{formatCurrency(unitPrice)}</p>
            : <p className="text-sm uppercase font-medium text-slate-500">Sold out</p>}
          {!soldOut && isInCart && <div className='flex gap-3'>
            <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity}/>
            <DeleteItem pizzaId={id}/>
          </div>
              }
          {!soldOut && !isInCart &&
              <Button type='base' onClick={handleAddToCart}>Add to cart</Button>
          }
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
