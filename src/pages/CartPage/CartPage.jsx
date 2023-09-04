import { useState, useEffect, useRef } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import CartList from "../../components/CartList/CartList";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function () {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  /*--- Event Handlers ---*/
  async function handleAddToOrder(productId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    await ordersAPI.addItemToCart(productId);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate("/orders");
  }

  return (
    <div>
      <section className="py-5 bg-light">
        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="h2 text-uppercase mb-0">My Cart</h1>
          </div>
        </div>
      </section>
      <div className="row">
        <section class="py-5">
          <CartList
            order={cart}
            handleChangeQty={handleChangeQty}
            handleCheckout={handleCheckout}
          />
        </section>
      </div>
    </div>
  );
}
