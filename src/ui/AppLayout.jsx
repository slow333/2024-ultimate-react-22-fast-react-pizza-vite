import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { useSelector } from 'react-redux'
import CartOverview from "../features/cart/CartOverview.jsx";
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const { customer, cart } = useSelector((state) => state.orderInfo);

  return (
    <div className="grid h-screen grid-rows-[auto_auto_1fr]">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />
      {(customer || cart.length > 0) && <CartOverview/>}
      <div className="mt-5">
        <main className="mx-auto">
          <Outlet />
        </main>
      </div>
      {/* {userName && <CartOverview />} */}
    </div>
  );
};

export default AppLayout;
