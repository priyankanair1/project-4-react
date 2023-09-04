import OrderItem from "../OrderItem/OrderItem";

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order }) {
  if (!order) return null;

  const lineItems = order.lineItems.map((item) => (
    <OrderItem lineItem={item} isPaid={order.isPaid} key={item._id} />
  ));

  return (
    <div class="mb-4 mb-lg-0 bg-light">
      <div class="table-responsive mb-4 ">
        <table class="table text-nowrap">
          <thead class="bg-light">
            <tr>
              <th class="border-0 p-3" scope="col">
                {" "}
              </th>
              <th class="border-0 p-3" scope="col">
                {" "}
                <strong class="text-sm text-uppercase">Product</strong>
              </th>
              <th class="border-0 p-3" scope="col">
                {" "}
                <strong class="text-sm text-uppercase">Price</strong>
              </th>
              <th class="border-0 p-3" scope="col">
                {" "}
                <strong class="text-sm text-uppercase">Quantity</strong>
              </th>
              <th class="border-0 p-3" scope="col">
                {" "}
                <strong class="text-sm text-uppercase">Total</strong>
              </th>
              <th class="border-0 p-3" scope="col">
                {" "}
                <strong class="text-sm text-uppercase">{order.isPaid}</strong>
              </th>
            </tr>
          </thead>
          {lineItems.length > 0 ? (
            <tbody class="border-0">{lineItems}</tbody>
          ) : (
            <tbody class="border-0">
              <p align="center">
                {" "}
                <br />
                <br />
                Cart is empty.
              </p>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
