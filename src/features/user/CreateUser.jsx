import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button.jsx";
import {addCustomer} from "../../services/cartSlice.js";

function CreateUser() {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(addCustomer(username));
    setUsername("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-7w input mt-8 mb-7"
      />

      {username !== "" && (
        <div>
          <Button type='primary'>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
