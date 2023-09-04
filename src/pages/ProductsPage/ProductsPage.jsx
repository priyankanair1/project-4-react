import { useState, useEffect, useRef } from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';
import ProductList from '../../components/ProductList/ProductList';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import LineItemList from '../../components/LineItemList/LineItemList';
import { useNavigate } from 'react-router-dom';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();
      categoriesRef.current = [...new Set(products.map(product => product.category.name))];
      setProducts(products);
      setActiveCat(categoriesRef.current[0]);
    }
    getProducts();  

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
    navigate('/orders');
  }

  return (
    <div>
      <section className="py-5 bg-light">
        <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="h2 text-uppercase mb-0">Products</h1>
          </div>
        </div>
      </section>
      <br/><br/>
      <div className="row">              
        <div className="col-lg-2 order-2 order-lg-1 mb-3">          
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />               
        </div>
        <div className="col-lg-8 order-1 order-lg-2 mb-5 mb-lg-0">
        <ProductList
          products={products.filter(product => product.category.name === activeCat)}
          handleAddToOrder={handleAddToOrder}
        />
        </div>
        <div className="col-lg-2 order-1 order-lg-2 mb-5 mb-lg-0">
          <LineItemList
            order={cart}
          />
        </div>
      </div>
    </div>

    );
}