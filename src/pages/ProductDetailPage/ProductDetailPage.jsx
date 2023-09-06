import { useState, useEffect, useRef } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductList from "../../components/ProductList/ProductList";
import CartList from "../../components/CartList/CartList";
import * as productsAPI from "../../utilities/products-api";
import * as ordersAPI from "../../utilities/orders-api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProductsPage({ user }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const categoriesRef = useRef([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  const { productId } = useParams();
  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function () {
    async function getProduct() {
      const product = await productsAPI.getById(productId);
      setProduct(product);
    }
    getProduct();

  }, []);

  async function handleAddToOrder(productId, quantity) {
    var updatedCart = await ordersAPI.addItemToCart(productId);
    updatedCart = await ordersAPI.setItemQtyInCart(productId, quantity);
    setCart(updatedCart);
    navigate("/cart");
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  return (
    <div>
      <section className="py-5 bg-light">
        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="h2 text-uppercase mb-0">SHOP</h1>
          </div>
        </div>
      </section>
      <br />
      <br />
      <div className="row">
        <div className="order-2 order-lg-1 mb-3">
          <ProductDetails product={product} handleAddToOrder={handleAddToOrder} handleChangeQty={handleChangeQty} />
        </div>
        <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0"></div>
      </div>
    </div>
  );
}
