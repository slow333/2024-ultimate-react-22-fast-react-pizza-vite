import { createBrowserRouter,  RouterProvider} from "react-router-dom";
import Home from "./ui/Home.jsx";
import Cart from "./features/cart/Cart.jsx";
import Menu from "./features/menu/Menu.jsx";
import Order from "./features/order/Order.jsx";
import CreateUser from "./features/user/CreateUser.jsx";
import Error from "./ui/Error.jsx";
import CreateOrder from "./features/order/CreateOrder.jsx";

const router = createBrowserRouter([
  { path: '/', element: <Home/>,  },
  { path: '/menu', element: <Menu/>, },
  { path: '/cart',  element: <Cart/>, },
  { path: '/order/new', element: <CreateOrder /> },
  { path: '/order/:orderId',  element: <Order/>, },
  { path: '/user',  element: <CreateUser/>, },
  { path: '*',  element: <Error/>, },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
