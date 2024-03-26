import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../services/userSlice.js";

function CreateUser() {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(createUser(username));
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
        className="my-3 px-3 py-2 w-72 rounded-lg "
      />

      {username !== "" && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
