import { useState, useEffect, useRef } from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';
import ProductList from '../../components/ProductList/ProductList';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import { useNavigate } from 'react-router-dom';
import HomeCategoryList from "../../components/HomeCategoryList/HomeCategoryList";
import * as categoriesAPI from "../../utilities/categories-api";

export default function ProductsPage({ user }) {
  const [products, setProducts] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getCategories() {
      const categories = await categoriesAPI.getAll();
      setCategories(categories);
    }
    getCategories();

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
    console.log();
    await ordersAPI.addItemToCart(productId);
    navigate("/cart");
  }

  async function handleLogin() {
    navigate('/login');
  }

  return (
    <div className="container">
    <section className="hero pb-3 bg-cover bg-center d-flex align-items-center banner">
      <div className="container py-5">
        <div className="row px-4 px-lg-5 ">
          <div className="col-lg-6">
            <p className="text-muted small text-uppercase mb-2">Big Basket</p>
            <h1 className="h2 text-uppercase mb-3">Browse your home needs</h1>
            <a className="btn btn-dark" href="/products">
              Find Items
            </a>
          </div>
        </div>
      </div>
    </section>
      <br/><br/>
      <div className="row"> 
      <header className="text-center">
          <p className="small text-muted small text-uppercase mb-1">
            Carefully created collections
          </p>
          <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
        </header>             
        <div className="order-1 order-lg-2 mb-5 mb-lg-0">
        <HomeCategoryList categories={categories} />
        </div>        
      </div>
    </div>

    );
}