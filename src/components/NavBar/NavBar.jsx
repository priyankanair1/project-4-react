import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <header className="header bg-light">
        <div className="container px-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
            <a className="navbar-brand" href="/">
              <img
                src="https://bigbasketuae.com/images/logo.jpg"
                width="80"
                height="69"
              />
              <span className="fw-bold text-uppercase text-dark">
                Big Basket
              </span>
            </a>
            <button
              className="navbar-toggler navbar-toggler-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
              {!user ? (
              <li className="nav-item">
              <Link className="nav-link" to="/">
                    HOME
                  </Link>                  
                </li>
              ):(
                <p></p>
              )}
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    SHOP
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                {user ? (
                  <>
                    <li>
                      <Link className="text_user">Welcome {user.name}</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/orders">
                        My Orders
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cart">
                        My Cart
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/" onClick={handleLogOut}>
                        Log Out
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Log In
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
        <div className="container px-lg-3 bg-white">&nbsp;</div>
      </header>
    </nav>
  );
}
