export default function OrderListItem({ order, activeOrder, setActiveOrder }) {
  return (
    <tr onClick={() => setActiveOrder(order)}>
      <th class="ps-0 py-3 border-light" scope="row">
        <div class="d-flex align-items-center">
          <div class="ms-3">
            <strong class="h6">{order.orderId}</strong>
          </div>
        </div>
      </th>
      <td class="p-3 align-middle border-light">
        <p class="mb-0 small">
          {new Date(order.updatedAt).toLocaleDateString()}
        </p>
      </td>
      <td class="p-3 align-middle border-light">
      {order.orderQty} Item{order.orderQty > 1 ? "s" : ""}
      </td>
      <td class="p-3 align-middle border-light">
      ${order.orderTotal.toFixed(2)}          
      </td>
      <td class="p-3 align-middle border-light"></td>
    </tr>
  );
}
