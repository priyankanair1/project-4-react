import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
//import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
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
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
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
