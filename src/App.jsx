import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./ui/Home.jsx";
import Cart from "./features/cart/Cart.jsx";
import Menu from "./features/menu/Menu.jsx";
import Order from "./features/order/Order.jsx";
import CreateUser from "./features/user/CreateUser.jsx";
import Error from "./ui/Error.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='menu' element={<Menu />}/>
        <Route path='order' element={<Order/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='user' element={<CreateUser/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
