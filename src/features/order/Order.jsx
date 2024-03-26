// Test ID: IIDSAT
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getMyCity } from "../../services/getMyCity.js";
import { getOrder } from "../../services/apiRestaurant.js";
import { useLoaderData, useParams } from "react-router-dom";

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

  const data = getMyCity();
  const { city, countryName, locality, latitude, longitude } = data;

  return (
    <div>
      <div>
        <h2>Status</h2>
        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>
      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div key={id}>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      <div>
        주문하신 곳은 :
        <span>
          도시: {city}, 나라: {countryName}, 지역 {locality} / lat: {latitude},
          lng: {longitude}
        </span>
      </div>
      <div className="cart">
        <div>당신이 주문한 목록은 ...</div>
        {cart.map((c) => (
          <ul key={c.pizzaId}>
            <li>
              {c.name} Pizza : {c.quantity}개
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
