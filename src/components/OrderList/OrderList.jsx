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

      <div class="bg-light px-4 py-3">
          <div class="row align-items-center text-center">
            <div class="col-md-6 mb-3 mb-md-0 text-md-start">
              <a class="btn btn-link p-0 text-dark btn-sm" href="/products">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-bar-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"
                  />
                </svg>
                &nbsp; Continue shopping
              </a>
            </div>
            <div class="col-md-6 text-md-end">
                <a class="btn btn-outline-dark btn-sm" href="/cart">
                  View Cart &nbsp;&nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-bar-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
                    />
                  </svg>{" "}
                </a>
              </div>
          </div>
        </div>
    </div>
  );
}
