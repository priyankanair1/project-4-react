export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <tr>
      <td class="p-3 align-middle border-light">
        <img src={lineItem.item.image} alt="..." width="70" />
      </td>
      <td class="p-3 align-middle border-light">
        <strong class="h6">
          <a class="reset-anchor animsition-link" href="detail.html">
            {lineItem.item.name}
          </a>
        </strong>{" "}
      </td>
      <td class="p-3 align-middle border-light">
        <p class="mb-0 small">{lineItem.item.price.toFixed(2)}</p>
      </td>
      <td class="p-3 align-middle border-light">{lineItem.qty}</td>
      <td class="p-3 align-middle border-light">
        <p class="mb-0 small">{lineItem.extPrice.toFixed(2)}</p>
      </td>
      <td class="p-3 align-middle border-light"></td>
    </tr>
  );
}
