import ProductListItem from '../ProductListItem/ProductListItem';

export default function ProductList({ menuItems, handleAddToOrder }) {
  const items = menuItems.map(item =>
    <ProductListItem
      key={item._id}
      menuItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );

  return (
    <div class="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
      <div className='row'>
        {items}
      </div>
    </div>    
  );
}