import React from 'react';
import Button from "../../ui/Button.jsx";
import {useFetcher} from "react-router-dom";
import {updateOrder} from "../../services/apiRestaurant.js";

const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method='PATCH'>
      <div className='relative'>
        <div className='absolute right-6 bottom-2'>
          <Button type='primary'>Make priority</Button>
        </div>
      </div>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export async function action({request, params}) {
  const data = { priority: true };
  await updateOrder(params.orderId, data)
  return null;
}