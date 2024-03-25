/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux";

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  console.log(useSelector(state => state.user))

  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, {"userName"}</h2>
      {cart.map(c => <ul key={c.pizzaId}>
        <li>{c.name} : {c.quantity} Quantity, ${c.unitPrice} ea./ ${c.totalPrice}</li>
      </ul>)}
      <div>
        총금액 : ${cart.reduce((acc, curr) => acc + curr.totalPrice, 0)}
      </div>

      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
