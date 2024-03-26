// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import LogoAni from "../utils/LogoAni.jsx";
import SearchOrder from "../features/order/SearchOrder.jsx";

const Header = () => {
  return (
    <header>
      <LogoAni />
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/menu" className="link">
        Menu
      </Link>
      <Link to="/cart" className="link">
        Cart
      </Link>
      <Link to="/order/new" className="link">
        Order New
      </Link>
      <Link to="/user" className="link">
        Create user
      </Link>
      <SearchOrder />
    </header>
  );
};

export default Header;
