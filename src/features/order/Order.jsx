// Test ID: IIDSAT
import {calcMinutesLeft, formatDate,} from "../../utils/helpers.js";
import {getOrder} from "../../services/apiRestaurant.js";
import {useLoaderData} from "react-router-dom";
import OrderItem from "./OrderItem.jsx";
import {useSelector} from "react-redux";
import OrderPrice from "./OrerPrice.jsx";
import OrderTitle from "./OrderTitle.jsx";
import OrderStatus from "./OrderStatus.jsx";
import {fetchAddress} from "../user/userSlice.js";

function Order() {
  const order = useLoaderData();

  const {
    id, status, priority,
    priorityPrice, orderPrice,
    estimatedDelivery,
    cart, customer,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  const {userName, phone, address} = useSelector(state => state.user)

  return (
    <div className='px-4 py-6 font-bodyFont space-y-8'>
      <OrderStatus customer={userName} priority={priority} status={status} phone={phone}/>

      <div className='flex justify-between flex-wrap me-3 bg-gray-300 p-4 rounded-full'>
        <p>
          {deliveryIn >= 0
            ? `약 ${calcMinutesLeft(estimatedDelivery)}분 후 도착 😃`
            : "Order should have arrived"}
        </p>
        <p className='text-sm text-slate-600'>(예상도착 시간 =>
          {formatDate(estimatedDelivery).split(' ').slice(2).join(" ")})</p>
      </div>
      <OrderTitle>주문한 목록</OrderTitle>
      <ul className='border-2 border-slate-400/40 divide-y divide-gray-400 p-4'>
        {cart.map((item) => <OrderItem item={item} key={item.pizzaId}/>)}
      </ul>
      <OrderTitle>주문 금액</OrderTitle>
      <OrderPrice priorityPrice={priorityPrice} orderPrice={orderPrice} priority={priority}/>
      <OrderTitle>주문하신 곳은</OrderTitle>
      <div className='me-3 bg-gray-300 p-4 rounded-full'>
        {address}
      </div>
    </div>
  );
}

export async function loader({params}) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;