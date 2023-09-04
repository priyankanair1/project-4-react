export default function ProductListItem({ product, handleAddToOrder }) {
  return (
    <div class="col-lg-4 col-sm-6 bg-light">
        <div className="product text-center">
          <div className="mb-3 position-relative">
            <div className="badge text-white bg-"></div>
            <a className="d-block" href="detail.html">
              <img className="img-fluid w-100" src={product.image} alt="..."/></a>
            <div className="product-overlay">
              <ul className="mb-0 list-inline">
                <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!">
                  <i className="far fa-heart"></i></a></li>
                <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" onClick={() => handleAddToOrder(product._id)}>Add to cart</a></li>
                <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
              </ul>
            </div>
          </div>
          <h6> <a className="reset-anchor" href="detail.html">{product.name}</a></h6>
          <p className="small text-muted">${product.price.toFixed(2)}</p>
        </div>
    </div> 
  );
}