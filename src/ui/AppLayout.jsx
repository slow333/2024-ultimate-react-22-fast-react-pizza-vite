import React from 'react';
import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
const AppLayout = () => {
  return (
       <div>
         <Header/>
         <main>
           <h1>Content</h1>
         </main>
         <CartOverview/>
       </div>
  );
}

export default AppLayout;