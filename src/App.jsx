import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Cart from "./features/cart/Cart.jsx";
import Menu, { loader as menuLoader } from "./features/menu/Menu.jsx";
import Order, { loader as orderLoader } from "./features/order/Order.jsx";
import CreateUser from "./features/user/CreateUser.jsx";
import Error from "./ui/Error.jsx";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder.jsx";
import AppLayout from "./ui/AppLayout.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: "/user",
        element: <CreateUser />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
