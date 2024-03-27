// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import LogoAni from "../utils/LogoAni.jsx";
import SearchOrder from "../features/order/SearchOrder.jsx";
import UserName from '../features/user/UserName.jsx';

const Header = () => {
  return (
    <header className="bg-slate-200 uppercase font-defaultWeb
      rounded-xl shadow-lg font-mono py-1 
      gap-2 sm:gap-4 flex items-center justify-between 
      px-1 sm:px-4 ">
        <div className="text-lg
              font-bold	text-slate-700 font-mono">
            Fast Pizza
            </div>
      <div className="w-[51px]">
        <LogoAni />
      </div>
      <Link to="/" className=" hover:text-yellow-500 hover:text-bold">
        Home
      </Link>
      <Link to="/menu" className=" hover:text-yellow-500 hover:text-bold">
        Menu
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
