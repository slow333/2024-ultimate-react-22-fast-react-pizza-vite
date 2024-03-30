import {formatCurrency} from "../../utils/helpers";

function OrderItem({item, isLoadingIngredients, ingredients}) {
  const {quantity, name, totalPrice} = item;

  return (
    <li className='py-3 space-y-3'>
      <div className='flex justify-between font-bold'>
        <div className='flex-col'>
          <p>
            <span>{quantity}&times;</span> {name}
          </p>
          {isLoadingIngredients ? "loading..."
            : <p className='font-bold italic text-slate-400'>{ingredients?.join(', ') ?? []}</p>}
        </div>
        <p> {formatCurrency(totalPrice, 1000)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
