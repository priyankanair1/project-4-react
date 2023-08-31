import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
<div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="card border-0 rounded-0 p-lg-4 bg-light">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li>
                    <label className="form-label text-xsm text-uppercase">Name &nbsp;&nbsp;</label>
                    <input className="form-control form-control-sm" type="text" name="name" value={this.state.name} onChange={this.handleChange} required  placeholder="Enter your name"/>
                    </li>                    
                    <li>
                    <label className="form-label text-xsm text-uppercase">Email &nbsp;&nbsp;</label>
                    <input className="form-control form-control-sm" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    </li>
                    <li>
                    <label className="form-label text-xsm text-uppercase">Password</label>
                    <input className="form-control form-control-sm" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    </li>
                    <li>
                    <label className="form-label text-xsm text-uppercase">Confirm Password</label>
                    <input className="form-control form-control-sm" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    </li>
                    <li className="border-bottom my-3"></li>
                    <li className="align-items-center">
                    <button className="btn btn-dark" type="submit" align="right">Sign Up</button>
                    </li>
                  </ul>
                </div>
            </form>
          </div>          
        </div>
      </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}