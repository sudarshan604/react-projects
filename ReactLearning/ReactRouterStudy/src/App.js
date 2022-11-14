import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Product from "./pages/Products";
import Error from "./pages/Error.js";
import SharedProduct from "./pages/SharedProduct.js";
import SingleProduct from "./pages/SingleProduct.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedProduct />}>
          <Route index path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:productId" element={<SingleProduct />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer>our footer </footer>
    </BrowserRouter>
  );
}

export default App;
