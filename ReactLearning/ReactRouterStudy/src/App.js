import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Product from "./pages/Products";
import Error from "./pages/Error.js";
import SharedProduct from "./pages/SharedProduct.js";
import SingleProduct from "./pages/SingleProduct.js";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedItem from "./pages/sharedItem.js";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedProduct />}>
          <Route index path="home" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="product" element={<SharedItem />}>
            <Route index element={<Product />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>

          <Route path="/login" element={<Login setUser={setUser} />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer>our footer </footer>
    </BrowserRouter>
  );
}

export default App;
