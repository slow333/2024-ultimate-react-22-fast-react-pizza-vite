import { useSelector } from "react-redux";
import AppLayout from "./AppLayout.jsx";
import {Link} from 'react-router-dom'
import CreateUser from "../features/user/CreateUser.jsx";

function Home() {
  return (
    <div className="flex flex-col items-center contents-center">
      <h1 className=" font-bold text-2xl text-stone-400/70 text-center my-6 
        md:text-6xl">
        The best pizza.
        <br />
        <span className="text-yellow-600">Straight out of the oven, straight to you.</span>
      </h1>
      <CreateUser/>
    </div>
  );
}

export default Home;
