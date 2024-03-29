import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { useSelector } from 'react-redux'
import CartOverview from "../features/cart/CartOverview.jsx";
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const { userName } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="grid h-screen grid-rows-[auto_auto_1fr]">
      {isLoading && <Loader />}
      <Header />
      <CartOverview/>
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
