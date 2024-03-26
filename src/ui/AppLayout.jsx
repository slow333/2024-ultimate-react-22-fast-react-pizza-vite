import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview.jsx";
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      <Header />
      <main>
        <h1>Content</h1>
        {isLoading && <Loader />}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
