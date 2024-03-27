/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import CheckBox from "../../ui/CheckBox";
import InputForm from "../../ui/InputForm.jsx";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  return (
    <div className="font-bodyFont ms-3">
      <div className='mt-3 mb-5 text-2xl text-slate-600'>주문 준비가 되었나요 ? 주문하세요!</div>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" className='divide-y-4'>
        <InputForm type='text' name='customer' title='이름'></InputForm>
        <InputForm type='tel' name='phone' title='전화번호'>
          {formErrors?.phone &&
               <p className='mt-2 text-red-500'>{formErrors.phone}</p>}
        </InputForm>
        <InputForm type='text' name='address' title="주소"></InputForm>

        <div className='flex items-center justify-start gap-3 mt-3'>
          <CheckBox handleChange={(e) => setWithPriority(e.target.checked)} value={withPriority}/>
          <div className='italic text-sm'>빠른 배달을 원하세요?(추가 비용 발생)</div>
        </div>

        <div className="mt-6">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type='primary'>
            {isSubmitting ? "submitting..." : "지금 주문"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "👉👉 전화번호 형식이 맞지 않아요...";
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
