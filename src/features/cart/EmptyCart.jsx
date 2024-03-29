import { Link } from 'react-router-dom';
import LinkButton from "../../ui/LinkButton.jsx";

function EmptyCart() {
  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className='text-xl mt-8 ms-4'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
