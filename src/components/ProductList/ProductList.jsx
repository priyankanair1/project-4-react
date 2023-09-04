import ProductListItem from "../ProductListItem/ProductListItem";
export default function ProductList({ products, handleAddToOrder }) {
  const items = products.map((product) => (
    <ProductListItem
      key={products._id}
      product={product}
      handleAddToOrder={handleAddToOrder}
    />
  ));

  return (
    <div className="order-1 order-lg-2 mb-5 mb-lg-0">
      <div className="row">{items}</div>
    </div>
  );
}
