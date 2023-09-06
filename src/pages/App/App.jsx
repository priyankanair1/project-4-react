import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import HomePage from "../HomePage/HomePage";
import ProductsPage from "../ProductsPage/ProductsPage";
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage";
import OrdersPage from "../OrdersPage/OrdersPage";
import CartPage from "../CartPage/CartPage";
import NavBar from "../../components/NavBar/NavBar";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="container">
      <NavBar user={user} setUser={setUser} />
      {user ? (
        <>
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<ProductsPage user={user} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage user={user} />} />
            <Route path="/*" element={<Navigate to="/" />} />

            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailPage />}
            />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage user={user} />} />
            <Route path="/*" element={<Navigate to="/" />} />

            <Route path="/login" element={<LoginForm setUser={setUser} />} />
            <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
          </Routes>
        </>
      )}
    </main>
  );
}
