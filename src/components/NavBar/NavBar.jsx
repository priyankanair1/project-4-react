import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <header className="header bg-white">
        <div className="container px-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0"><a className="navbar-brand" href="/"><span className="fw-bold text-uppercase text-dark">Big Basket</span></a>
            <button className="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>                  
                </li>                
                { user ?
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/products">Products</Link>                  
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/orders">Orders</Link>                  
                    </li> 
                  </>
                  :
                  <>                                 
                  </>
                }
              </ul>
              <ul className="navbar-nav ms-auto">               
                { user ?
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cart">My Cart</Link>                
                    </li>                 
                    <li className="nav-item">
                      <Link className="nav-link" to="/logout">Log Out</Link>
                    </li>
                    <li>
                    <Link className="text_user">{user.name}</Link>
                    </li>
                   
                  </> 
                  :
                  <>              
                  </>
                }
                
              </ul>
            </div>
          </nav>
        </div>
      </header>

    </nav>
  );
}