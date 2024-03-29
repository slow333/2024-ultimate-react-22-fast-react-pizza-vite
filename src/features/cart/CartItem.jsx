import {formatCurrency} from "../../utils/helpers.js"
import {useDispatch, useSelector} from "react-redux";
import {decQuantity, incQuantity, setQuantity} from "../../services/orderSlice.js";
import {useEffect, useState} from "react";
import {getMenu, getOrder} from "../../services/apiRestaurant.js";
import Button from "../../ui/Button.jsx";

function CartItem({item}) {
  const {pizzaId, name, quantity, totalPrice} = item;
  const [selectedQty, setSelectedQty] = useState(quantity);
  const dispatch = useDispatch();
  const [getPizzaData, setGetPizzaData] = useState()

  useEffect(() => {
    getMenu(pizzaId).then(data => setGetPizzaData(data));
  }, []);

  const imgUrl = getPizzaData.filter(pizza => pizza.id === pizzaId)[0].imageUrl
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
    <li className="mb-3 flex justify-between items-center">
      <div className='flex gap-3 items-center'>
        <img src={imgUrl} alt={name}  className={`h-16 rounded-full`}/>
        <p> {selectedQty}&times; {name} </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <div className='flex gap-3 items-center'>
        <IncDecButton handleClick={() => setSelectedQty(q => q -1)}>-</IncDecButton>
        {selectedQty}
        <IncDecButton handleClick={() => setSelectedQty(q => q +1)}>+</IncDecButton>
      </div>
    </li>);
}
function IncDecButton({children, handleClick}) {
  return <button className='w-6 h-6 bg-slate-600 rounded-full text-slate-400 text-3xl/1 font-extrabold'
                 onClick={handleClick}>{children}</button>

}
export default CartItem;
