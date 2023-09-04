export default function CartItem({ cartItem, isPaid, handleChangeQty }) {
    return (
    <tr>
      <th class="ps-0 py-3 border-light" scope="row">
        <div class="d-flex align-items-center">
          <a class="reset-anchor d-block animsition-link" href="detail.html">
            <img src={cartItem.item.image} alt="..." width="70" />
          </a>
          <div class="ms-3">
            <strong class="h6">
              <a class="reset-anchor animsition-link" href="detail.html">
                {cartItem.item.name}
              </a>
            </strong>
          </div>
        </div>
      </th>
      <td class="p-3 align-middle border-light">
        <p class="mb-0 small">{cartItem.item.price.toFixed(2)}</p>
      </td>
      <td class="p-3 align-middle border-light">
        <div class="border d-flex align-items-center justify-content-between px-3">
          <span class="small text-uppercase text-gray headings-font-family">
            Quantity
          </span>
          <div class="quantity">
            <button
              class="dec-btn p-0"
              onClick={() =>
                handleChangeQty(cartItem.item._id, cartItem.qty - 1)
              }
            >
              -
            </button>
            <input
              class="form-control form-control-sm border-0 shadow-0 p-0"
              type="text"
              value={cartItem.qty}
            />
            <button
              class="inc-btn p-0"
              onClick={() =>
                handleChangeQty(cartItem.item._id, cartItem.qty + 1)
              }
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td class="p-3 align-middle border-light">
        <p class="mb-0 small">{cartItem.extPrice.toFixed(2)}</p>
      </td>
      <td class="p-3 align-middle border-light">
        <a class="reset-anchor" href="#!" onClick={() =>
                handleChangeQty(cartItem.item._id, cartItem.qty - 1)
              }>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
          </svg>
        </a>
      </td>
    </tr>
  );
}
