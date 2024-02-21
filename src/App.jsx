import "slick-carousel/slick/slick.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RouteLayout from "./components/layouts/RouteLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProducts from "./pages/SingleProducts";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Journal from "./pages/Journal";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:productId" element={<SingleProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/journal" element={<Journal/>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
