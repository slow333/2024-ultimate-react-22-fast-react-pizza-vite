import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button.jsx";
import {updateName} from "./userSlice.js";
import {useNavigate} from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    setUsername("");
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72 input mt-8 mb-7 px-5 py-3"
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
