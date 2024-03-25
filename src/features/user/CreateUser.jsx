import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createUser} from "../../services/userSlice.js";

function CreateUser() {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return;
    dispatch(createUser(username));
    // setUsername('');
  }

  console.log(useSelector(state => state))

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
