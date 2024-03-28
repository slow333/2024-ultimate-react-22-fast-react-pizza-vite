import {formatCurrency} from "../../utils/helpers.js"

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="mb-3">
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice, 1000)}</p>
      </div>
    </li>
  );
}

export default CartItem;
