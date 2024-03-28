/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import {Form, redirect, useActionData, useNavigation} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import CheckBox from "../../ui/CheckBox";
import {useDispatch, useSelector} from "react-redux";
import {getMyCity} from "../../services/getMyCity.js";
import {addAddress, addCustomer, addPhone} from "../../services/cartSlice.js";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const position = getMyCity();
  const {city, locality, latitude, longitude} = position;

  const positionAddress = [city, locality].join(' ');

  const [withPriority, setWithPriority] = useState(false);

  const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState(positionAddress);

  const { cart } = useSelector(state => state.orderInfo);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const dispatch = useDispatch();

  const formErrors = useActionData();

  useEffect(() => {
    dispatch(addPhone(phone));
    dispatch(addCustomer(customer));
    dispatch(addAddress(address));
  }, [phone, customer, address, dispatch]);

  return (
    <div className="font-bodyFont ms-3">
      <div className='mt-3 mb-5 text-2xl text-slate-600'>주문 준비가 되었나요 ? 주문하세요!</div>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" className='divide-y-4'>

        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2 mt-3 ms-3 me-6 sm:flex-row sm:items-center'>
            <div className='w-24'>이름</div>
            <input className="input w-full"
                   type='text' name='customer' value={customer}
                   onChange={(e) => setCustomer(e.target.value)} required/>
          </div>
          {!customer && <p className='mt-2 text-red-500'>사용자를 추가하세요.</p>}
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2 mt-3 ms-3 me-6 sm:flex-row sm:items-center'>
            <div className='w-24'>전화번호</div>
            <input className="input w-full"
                   type='tel' name='phone' value={phone}
                   onChange={(e) => setPhone(e.target.value)} required/>
          </div>
          {formErrors?.phone &&
               <p className='mt-2 text-red-500'>{formErrors.phone}</p>}
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2 mt-3 ms-3 me-6 sm:flex-row sm:items-center'>
            <div className='w-24'>주소</div>
            <input className="input w-full"
                   type='text' name='address' value={address}
                   onChange={(e) => setAddress(e.target.value)} required/>
          </div>
          {!address && <p className='mt-2 text-red-500'>주소를 추가하세요.</p>}
        </div>

        <div className='flex items-center justify-start gap-3 mt-3'>
          <CheckBox handleChange={(e) => setWithPriority(e.target.checked)} value={withPriority} name='priority'/>
          <div className='italic text-sm'>빠른 배달을 원하세요?(추가 비용 발생)</div>
        </div>

        <div className="mt-6">
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
          <Button disabled={isSubmitting} type='primary' >
            {isSubmitting ? "submitting..." : "지금 주문"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority,
  };
  console.log(order)

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "👉👉 전화번호 형식이 맞지 않아요...";
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
