
import { Link } from "react-router-dom";
export default function Categories({ category }) {
  return (
    <div className="col-lg-4">
    <a className="category-item" href="/products">
      <img className="img-fluid" src={category.image} alt="" />
      <strong className="category-item-title">{category.name}</strong>
    </a>
  </div>
  );
}