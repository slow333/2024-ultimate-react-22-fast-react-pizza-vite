import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { useSelector } from 'react-redux'
import CartOverview from "../features/cart/CartOverview.jsx";
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const { userName, createdAt } = useSelector((state) => state.userInfo);

  return (
    <div className="grid h-[96vh] grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="mt-5">
        <main className="max-w-3xl mx-auto">
          <h1>Content</h1>
          <Outlet />
        </main>
      </div>
      {/* {userName && <CartOverview />}       */}
      <CartOverview />
    </div>
  );
};

export default AppLayout;
