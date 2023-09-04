import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ordersAPI from "../../utilities/orders-api";
import OrderDetail from "../../components/OrderItemsList/OrderItemsList";
import OrderList from "../../components/OrderList/OrderList";

export default function OrdersPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setActiveOrder(orders[0] || null);
      setOrders(orders);
    }
    getOrders();
  }, []);

  return (
    <div>
      <section className="py-5 bg-light">
        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="h2 text-uppercase mb-0">My Orders</h1>
          </div>
        </div>
      </section>
      <div className="row">
        <section class="py-5">
          <OrderList
            orders={orders}
            activeOrder={activeOrder}
            setActiveOrder={setActiveOrder}
          />
        </section>
      </div>
    </div>
  );
}
