import {formatCurrency} from "../../utils/helpers.js"
import {useDispatch, useSelector} from "react-redux";
import {decQuantity, incQuantity, setQuantity} from "../../services/orderSlice.js";
import {useEffect, useState} from "react";

function CartItem({item}) {
  const {pizzaId, name, quantity, totalPrice} = item;
  const [selectedQty, setSelectedQty] = useState(quantity);
  const dispatch = useDispatch();

/*  function handleIncrease(){
    // e.preventDefault();
    setSelectedQty(s => s+1)
    dispatch(setQuantity(pizzaId, selectedQty))
  }
  function handleDecrease(){
    // e.preventDefault();
    setSelectedQty(s => s-1)

  }*/

  useEffect(() => {
    dispatch(setQuantity(pizzaId, selectedQty))
  }, [selectedQty]);

  return (
    <li className="mb-3 flex justify-between">
      <div>
        <p> {selectedQty}&times; {name} </p>
        <p>{formatCurrency(totalPrice, 1000)}</p>
      </div>
      <div className='flex gap-3 items-center'>
        <button className='w-6 h-6 bg-slate-600 rounded-full text-slate-400 text-3xl/1 font-extrabold' onClick={() => setSelectedQty(q => q -1)}>-</button>
        {selectedQty}
        <button className='w-6 h-6 bg-slate-600 rounded-full text-slate-400 text-3xl/1 font-extrabold' onClick={() => setSelectedQty(q => q+1)}>+</button>
      </div>
    </li>);
}

export default CartItem;
