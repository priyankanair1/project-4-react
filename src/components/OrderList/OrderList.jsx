import OrderListItem from "../OrderListItem/OrderListItem";
import OrderDetail from "../OrderItemsList/OrderItemsList";

export default function OrderList({ orders, activeOrder, setActiveOrder }) {
  const orderList = orders.map((order) => (
    <OrderListItem
      order={order}
      activeOrder={activeOrder}
      setActiveOrder={setActiveOrder}
      key={order.id}
    />
  ));

  return (
    <div class="row">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <div class="table-responsive mb-4">
          <table class="table text-nowrap">
            <thead class="bg-light">
              <tr>
                <th class="border-0 p-3" scope="col">
                  {" "}
                  <strong class="text-sm text-uppercase">Order Id</strong>
                </th>
                <th class="border-0 p-3" scope="col">
                  {" "}
                  <strong class="text-sm text-uppercase">Date</strong>
                </th>
                <th class="border-0 p-3" scope="col">
                  {" "}
                  <strong class="text-sm text-uppercase">Item Count</strong>
                </th>
                <th class="border-0 p-3" scope="col">
                  {" "}
                  <strong class="text-sm text-uppercase">Total Price</strong>
                </th>
                <th class="border-0 p-3" scope="col">
                  {" "}
                  <strong class="text-sm text-uppercase"></strong>
                </th>
              </tr>
            </thead>
            {orderList.length > 0 ? (
              <tbody class="border-0">{orderList}</tbody>
            ) : (
              <tbody class="border-0">
                <p align="center">
                  {" "}
                  <br />
                  <br />
                  No Orders found !{" "}
                </p>
              </tbody>
            )}
          </table>
        </div>
      </div>
      <div class="col-lg-6">
      <OrderDetail order={activeOrder} />        
      </div>    
    </div>
  );
}
