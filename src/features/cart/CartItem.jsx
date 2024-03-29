import {formatCurrency} from "../../utils/helpers.js"
import DeleteItem from "./DeleteItem.jsx";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";
import {useSelector} from "react-redux";
import {getCurrentQuantityById} from "./cartSlice.js";

function CartItem({item}) {
  const {pizzaId, name, quantity, totalPrice} = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))

  // const imgUrl = menu.filter(pizza => pizza.id === pizzaId)[0].imageUrl

  return (
    <li className="my-2 flex justify-between items-center">
      <div className='flex gap-3 items-center'>
        {/*<img src={imgUrl} alt={name} className={`h-16 rounded-full`}/>*/}
        <p> {quantity}&times; {name} </p>
      </div>

      <div className='flex gap-3 items-center'>
        <p className='pe-5'>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>);
}

export default CartItem;