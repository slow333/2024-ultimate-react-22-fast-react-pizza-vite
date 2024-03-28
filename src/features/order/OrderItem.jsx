import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className='py-3'>
      <div className='flex justify-between font-bold'>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p> {formatCurrency(totalPrice, 1000)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
