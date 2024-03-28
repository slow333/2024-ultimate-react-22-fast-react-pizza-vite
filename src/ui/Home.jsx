import { useSelector } from "react-redux";
import AppLayout from "./AppLayout.jsx";
import {Link} from 'react-router-dom'
import CreateUser from "../features/user/CreateUser.jsx";

function Home() {
  return (
    <div className="flex flex-col items-center contents-center">
      <h1 className=" font-bold text-2xl text-stone-400/70 text-center my-6
        md:text-4xl">
        <span className='mb-5 inline-block'>The best pizza.</span>
        <br />
        <span className="text-yellow-600 inline-block mt-5 mb-6">Straight out of the oven, straight to you.</span>
      </h1>
      <CreateUser/>
    </div>
  );
}

export default Home;
