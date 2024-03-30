/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import {Form, redirect, useActionData, useNavigation} from "react-router-dom";
import {createOrder} from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import CheckBox from "../../ui/CheckBox";
import {useDispatch, useSelector} from "react-redux";
import {fetchAddress, updateAddress, updateName, updatePhone} from "../user/userSlice.js";
import LinkButton from "../../ui/LinkButton.jsx";
import {getTotalCartPrice} from "../cart/cartSlice.js";
import {formatCurrency} from "../../utils/helpers.js";
import CreateOrderInput from "./CreateOrderInput.jsx";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {

  const [withPriority, setWithPriority] = useState(false);
  const {userName, phone, address, status: addressStatus, position, error:errorAddress}
    = useSelector(state => state.user);
  const isLoadingAddress = addressStatus === 'loading';

  const cart = useSelector(state => state.cart.cart);
  const totalCartPrice = useSelector(getTotalCartPrice)
  const totalPriorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + totalPriorityPrice;
  const dispatch = useDispatch();
  // const address = fetchAddress();
  // console.log(address)

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  return (
    <div className="font-bodyFont ms-3">
      <div className='mt-3 mb-5 text-2xl text-slate-600'>주문 준비가 되었나요 ? 주문하세요!</div>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" className='divide-y-4'>

        <CreateOrderInput onChange={(e) => dispatch(updateName(e.target.value))}
                          value={userName} label='이름' type='text' name='customer'>
          {/*  /!*{!customer  && <p className='mt-2 text-red-500'>사용자를 추가하세요.</p>}*!/*/}
        </CreateOrderInput>

        <CreateOrderInput onChange={(e) => {
          e.preventDefault();
          dispatch(updatePhone(e.target.value));
        }} value={phone} label='전화번호' type='tel' name='phone'>
          {formErrors?.phone &&
            <p className='mt-2 text-red-500'>{formErrors.phone}</p>}
        </CreateOrderInput>

        <CreateOrderInput onChange={(e) => dispatch(updateAddress(e.target.value))}
                          value={address} label='주소' type='text' name='address' disabled={isLoadingAddress}
        >
          {errorAddress &&
            <span className='me-3 text-red-500 font-bold italic'>{errorAddress}</span>
          }
          {!position.latitude && !position.longitude && !errorAddress &&
            <Button type='base' disabled={isLoadingAddress}
                    onClick={() => dispatch(fetchAddress())}>Get Position</Button>}
        </CreateOrderInput>

        <CheckBox onChange={(e) => setWithPriority(e.target.checked)} value={withPriority}/>

        <div className="mt-6">
          <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
          <input type="hidden" name="position"
                 value={(position.latitude && position.longitude)
                   ? `${position.latitude},${position.longitude}`
                   :''}/>
          {cart.length > 0
            ? <Button disabled={isSubmitting} type='primary'>
              {isSubmitting ? "submitting..." : "지금 주문 : " + formatCurrency(totalPrice)} </Button>
            : <LinkButton to='/menu'>&larr; Cart is empty</LinkButton>
          }
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
    priority: data.priority === 'true',
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
