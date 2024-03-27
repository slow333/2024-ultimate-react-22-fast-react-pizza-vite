// Test ID: IIDSAT
import {calcMinutesLeft, formatCurrency, formatDate,} from "../../utils/helpers.js";
import {getMyCity} from "../../services/getMyCity.js";
import {getOrder} from "../../services/apiRestaurant.js";
import {useLoaderData} from "react-router-dom";
import OrderItem from "./OrderItem.jsx";

const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders,
  // so for privacy reasons we're gonna exclude names or address,
  // these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const position = getMyCity();
  const {city, countryName, locality, latitude, longitude} = position;

  return (
       <div className='px-4 py-6 font-bodyFont space-y-8'>
         <div className='flex justify-between flex-wrap me-3'>
           <h2 className='text-xl font-bold'>Order #{id} status</h2>
           <div className='space-x-2'>
             {true &&
                  <span className='bg-red-600 text-sm rounded-full px-3 py-1 text-red-200 uppercase'>Priority</span>}
             {/*{priority && <span className='bg-red-600 text-sm' >Priority</span>}*/}
             <span
                  className='bg-slate-600 text-sm rounded-full px-3 py-1 text-slate-300 uppercase'>{status} order</span>
           </div>
         </div>
         <div className='flex justify-between flex-wrap me-3 bg-gray-300 p-4 rounded-full'>
           <p>
             {deliveryIn >= 0
                  ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                  : "Order should have arrived"}
           </p>
           <p className='text-sm text-slate-600'>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
         </div>
         <div>
           <div className='bg-slate-800 text-slate-300 text-xl p-3 rounded-2xl mb-5'>
             당신이 주문한 목록은 ...
           </div>
           <ul className='border-2 border-slate-400/40 divide-y divide-gray-400 p-4'>
             {cart.map((c) => <OrderItem item={c} key={c.id} />)}
           </ul>
         </div>

         <div className='bg-slate-800 text-slate-300 text-xl p-3 rounded-2xl mb-5'>
           주문 금액
         </div>
         <div className='space-y-3 me-3 bg-gray-300 p-4 rounded-lg'>
           <p>Price pizza: {formatCurrency(orderPrice)}</p>
           {true && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
           {/*{priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}*/}
           <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
         </div>
         <div className='bg-slate-800 text-slate-300 text-xl p-3 rounded-2xl'>
           주문하신 곳은 </div>
         <div  className='me-3 bg-gray-300 p-4 rounded-full'>
          도시: {city}, 나라: {countryName}, 지역: {locality},  lat:{" "}
           {latitude}, lng: {longitude}
        </div>
       </div>
  );
}

export async function loader({params}) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
