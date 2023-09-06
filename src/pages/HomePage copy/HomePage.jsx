import { useState, useEffect, useRef } from "react";
import Categories from "../../components/Categories/Categories";
import * as categoriesAPI from "../../utilities/categories-api";
import { useNavigate } from "react-router-dom";

export default function ProductsPage({ user }) {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function () {
    async function getCategories() {
      const categories = await categoriesAPI.getAll();
      setCategories(categories);
    }
    getCategories();
  }, []);

  console.log("vvvvvv");
  console.log(categories);
  return (
    <div className="container">
      <section className="hero pb-3 bg-cover bg-center d-flex align-items-center banner">
        <div className="container py-5">
          <div className="row px-4 px-lg-5 ">
            <div className="col-lg-6">
              <p className="text-muted small text-uppercase mb-2">Big Basket</p>
              <h1 className="h2 text-uppercase mb-3">Browse your home needs</h1>
              <a className="btn btn-dark" href="/products">
                Find Items
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-5">
        <header className="text-center">
          <p className="small text-muted small text-uppercase mb-1">
            Carefully created collections
          </p>
          <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
        </header>
      </div>
      <div className="col-lg-12 order-1 order-lg-2 mb-5 mb-lg-0">
      <div className="row">
        <Categories categories={categories} />
      </div>
      </div>

    </div>
  );
}
