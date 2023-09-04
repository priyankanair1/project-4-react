export default function LineItem({ lineItem }) {
  return (
    <tr>
      <td class="p-3 align-middle border-light">
        <p class="mb-0 small"> {lineItem.item.name}</p>
      </td>
      <td class="p-3 align-middle border-light">
      {lineItem.qty}
      </td>
    </tr>
  );
}
