import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
//import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrdersPage from '../OrdersPage/OrdersPage';
import CartPage from '../CartPage/CartPage';
import NavBar from '../../components/NavBar/NavBar';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
   
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
              <Route path="/" element={<ProductsPage user={user}/>}  />
              <Route path="/products" element={<ProductsPage user={user}/>} />              
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </>
          :
          <>        
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<ProductsPage user={user}/>} />
              <Route path="/login" element={<LoginForm setUser={setUser} />} />
              <Route path="/signup" element={<SignUpForm setUser={setUser} />} />              
            </Routes>
          </>
      }
   </main>
    
  );
}
