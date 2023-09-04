import LineItem from "../LineItem/LineItem";

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order }) {
  if (!order) return null;

  const lineItems = order.lineItems.map((item) => (
    <LineItem lineItem={item} key={item._id} />
  ));

  return (
    <div>
      <h5 className="text-uppercase mb-4" align="center">
        Items
      </h5>
      {lineItems}
    </div>
  );
}
