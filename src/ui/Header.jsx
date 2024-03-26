// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import LogoAni from "../utils/LogoAni.jsx";
import SearchOrder from "../features/order/SearchOrder.jsx";
import UserName from '../features/user/UserName.jsx';

const Header = () => {
  return (
    <header className="bg-yellow-600/80 uppercase
    gap-2 sm:gap-4 flex items-center justify-around 
    px-1 sm:px-4 tracking-[0.1rem]">
      <div className="w-[54px]  hover:text-yellow-500 hover:text-bold">
        <LogoAni/>
      </div>
      <Link to="/" className=" hover:text-yellow-500 hover:text-bold">
        Home
      </Link>
      <Link to="/menu" className=" hover:text-yellow-500 hover:text-bold">
        Menu
      </Link>
      <Link to="/cart"className=" hover:text-yellow-500 hover:text-bold">
        Cart
      </Link>
      <Link to="/order/new" className=" hover:text-yellow-500 hover:text-bold">
        Order New
      </Link>
      <SearchOrder />
      <div className="hidden sm:block">

      <UserName/>
      </div>
    </header>
  );
};

export default Header;
