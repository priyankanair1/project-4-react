import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
<div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="card border-0 rounded-0 p-lg-4 bg-light">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="card-body">
                  <p className="error-message">{error}</p>
                  <ul className="list-unstyled mb-0">
                    <li>
                    <label className="form-label text-xsm text-uppercase">Email &nbsp;&nbsp;</label>
                    <input className="form-control form-control-sm" type="text" name="email" value={credentials.email} onChange={handleChange} required placeholder="Enter your email"/>
                    </li>                    
                    <li>
                    <label className="form-label text-xsm text-uppercase">Password</label>
                    <input className="form-control form-control-sm" type="password" name="password" value={credentials.password} onChange={handleChange} required placeholder="Enter your password"/>
                    </li>
                    <li className="border-bottom my-3"></li>
                    <li className="align-items-center">
                    <button className="btn btn-dark" type="submit" align="right">Login</button>
                    </li>
                  </ul>
                </div>
            </form>
          </div>          
        </div>
      </div>
  </div>
  );
}