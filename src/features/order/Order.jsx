// Test ID: IIDSAT
import {calcMinutesLeft, formatCurrency, formatDate,} from "../../utils/helpers.js";
import {getOrder} from "../../services/apiRestaurant.js";
import {useLoaderData} from "react-router-dom";
import OrderItem from "./OrderItem.jsx";
import {useSelector} from "react-redux";

function Order() {
  const order = useLoaderData();
  console.log(order)

  const { id, status,  priority,
    priorityPrice, orderPrice,
    estimatedDelivery,
    cart, customer
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  const { phone, address } = useSelector(state => state.orderInfo)
  console.log(phone, address)


  return (
       <div className='px-4 py-6 font-bodyFont space-y-8'>
         <div className='flex justify-between flex-wrap me-3'>
           <h2 className='text-xl font-bold'>Order #{customer.toUpperCase()} {phone} </h2>status
           <div className='space-x-2'>
             {priority &&
                  <span className='bg-red-600 text-sm rounded-full px-3 py-1 text-red-200 uppercase'>Priority</span>}
             <span
                  className='bg-slate-600 text-sm rounded-full px-3 py-1 text-slate-300 uppercase'>{status} order</span>
           </div>
         </div>
         <div className='flex justify-between flex-wrap me-3 bg-gray-300 p-4 rounded-full'>
           <p>
             {deliveryIn >= 0
                  ? `약 ${calcMinutesLeft(estimatedDelivery)}분 후 도착 😃`
                  : "Order should have arrived"}
           </p>
           <p className='text-sm text-slate-600'>(예상도착 시간 :
             {formatDate(estimatedDelivery).split(' ').slice(2).join(" ")})</p>
         </div>
         <div>
           <div className='bg-slate-800 text-slate-300 text-xl p-3 rounded-2xl mb-5'>
             당신이 주문한 목록은 ...
           </div>
           <ul className='border-2 border-slate-400/40 divide-y divide-gray-400 p-4'>
             {cart.map((item) => <OrderItem item={item} key={item.pizzaId}/>)}
           </ul>
         </div>

         <div className='bg-slate-800 text-slate-300 text-xl p-3 rounded-2xl mb-5'>
           주문 금액
         </div>
         <div className='space-y-3 me-3 bg-gray-300 p-4 rounded-lg'>
           <p>Price pizza: {formatCurrency(orderPrice, 1000)}</p>
           {priority && <p>Price priority: {formatCurrency(priorityPrice, 1000)}</p>}
           {/*{priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}*/}
           <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice, 1000)}</p>
         </div>
         <div className='bg-slate-800 text-slate-300 text-xl p-3 rounded-2xl'>
           주문하신 곳은
         </div>
         <div className='me-3 bg-gray-300 p-4 rounded-full'>
           {/*{city}시 {locality}동 ({latitude}, {longitude}) */}
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
