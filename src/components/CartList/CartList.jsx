import CartItem from "../CartItem/CartItem";

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({
  order,
  handleChangeQty,
  handleCheckout,
}) {
  if (!order) return null;

  const cartItems = order.lineItems.map((item) => (
    <CartItem
      cartItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  ));

  return (
    <div class="row">
      <div class="col-lg-8 mb-4 mb-lg-0">
        <div class="table-responsive mb-4">
          <table class="table text-nowrap">
            <thead class="bg-light">
              <tr>
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
            {cartItems.length > 0 ? (
              <tbody class="border-0">{cartItems}</tbody>
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
              {cartItems.length > 0  ? (
                <a
                  class="btn btn-outline-dark btn-sm"
                  href="#"
                  onClick={handleCheckout}
                >
                  Proceed to checkout &nbsp;&nbsp;&nbsp;
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
              ) : (
                <a class="btn btn-outline-dark btn-sm" href="/orders">
                  View Orders &nbsp;&nbsp;&nbsp;
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
              )}
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card border-0 rounded-0 p-lg-4 bg-light">
          <div class="card-body">
            <h5 class="text-uppercase mb-4">Cart total</h5>
            <ul class="list-unstyled mb-0">
              <li class="d-flex align-items-center justify-content-between">
                <strong class="text-uppercase small font-weight-bold">
                  Subtotal
                </strong>
                <span class="text-muted small">
                  ${order.orderTotal.toFixed(2)}
                </span>
              </li>
              <li class="border-bottom my-2"></li>
              <li class="d-flex align-items-center justify-content-between mb-4">
                <strong class="text-uppercase small font-weight-bold">
                  Total
                </strong>
                <span>${order.orderTotal.toFixed(2)}</span>
              </li>
              <li>
                <form action="#">
                  <div class="input-group mb-0">
                    <button
                      class="btn btn-dark btn-sm w-100"
                      onClick={handleCheckout}
                      disabled={!cartItems.length}
                    >
                      {" "}
                      Checkout
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
