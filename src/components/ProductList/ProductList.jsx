import ProductListItem from "../ProductListItem/ProductListItem";
export default function ProductList({ products, handleAddToOrder, handleLogin, user }) {
  const items = products.map((product) => (
    <ProductListItem
      key={products._id}
      product={product}
      user={user}
      handleAddToOrder={handleAddToOrder}
      handleLogin={handleLogin}
    />
  ));

  return (
    <div className="order-1 order-lg-2 mb-5 mb-lg-0">
      <div className="row">{items}</div>
    </div>
  );
}
