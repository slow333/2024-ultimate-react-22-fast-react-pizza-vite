import React from 'react';
import Button from "../../ui/Button.jsx";
import {deleteItem} from "./cartSlice.js";
import {useDispatch} from "react-redux";

const DeleteItem = ({pizzaId}) => {
  const dispatch = useDispatch();
  return (
      <Button type='delete' onClick={() => dispatch(deleteItem(pizzaId))}>
        Delete
      </Button>
  );
};

export default DeleteItem;
