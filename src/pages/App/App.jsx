import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
//import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrdersPage from '../OrdersPage/OrdersPage';
import CartPage from '../CartPage/CartPage';
import NavBar from '../../components/NavBar/NavBar';
   
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="container">
      <NavBar user={user} setUser={setUser} />            
      {
      user ?
          <>
            <Routes>
              {/* Route components in here */}
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<OrdersPage />} />
            </Routes>
          </>
          :
          <>          
          <AuthPage setUser={setUser} />
          </>
      }
   </main>
    
  );
}
