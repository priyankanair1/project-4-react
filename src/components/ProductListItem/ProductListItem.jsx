export default function ProductListItem({
  key,
  product,
  handleAddToOrder,
  user,
  handleLogin
}) {
  return (
    <div class="col-lg-4 col-sm-6 bg-light">
      <div className="product text-center">
        <div className="mb-3 position-relative">
          <div className="badge text-white bg-"></div>
          <a className="d-block" href="detail.html">
            <img className="img-fluid w-100" src={product.image} alt="..." />
          </a>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item m-0 p-0">
                {
                  user ? (
                    <a
                  className="btn btn-sm btn-dark"
                  onClick={() => handleAddToOrder(product._id)}
                >
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Add to cart &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                </a>
                  )
                  :
                  (<a
                    className="btn btn-sm btn-dark"
                    onClick={() => handleLogin(product._id)}
                  >
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Login &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                  </a>)
                }
                
              </li>
            </ul>
          </div>
        </div>
        <h6>
          {" "}
          <a className="reset-anchor" href="detail.html">
            {product.name}            
          </a>
        </h6>
        <p className="small text-muted">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
