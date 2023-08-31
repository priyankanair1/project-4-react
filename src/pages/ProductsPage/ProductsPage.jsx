import { useState, useEffect, useRef } from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';
import ProductList from '../../components/ProductList/ProductList';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();  
  }, []);

  /*--- Event Handlers ---*/
  async function handleAddToOrder(itemId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    await ordersAPI.addItemToCart(itemId);
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
        <div className="col-lg-3 order-2 order-lg-1 mb-3">          
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />               
        </div>
        
        <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
        <ProductList
          menuItems={menuItems.filter(item => item.category.name === activeCat)}
          handleAddToOrder={handleAddToOrder}
        />
        </div>
      </div>
    </div>

    );
}