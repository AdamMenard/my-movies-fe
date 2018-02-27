import React, {Component} from 'react';
// import { withRouter } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
  super();
  this.state = {
    name: '',
    email: '',
    password: '',
  }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    // e.preventDefault();
    fetch(`https://my-movies-be.herokuapp.com/api/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        })
      }).then((res) => {
        return res.json()
      }).then((json) => {
        console.log('Welcome to MyMovies!')
        // this.props.history.push('/userProfile');
      })
    }
  render(){
    return(
      <form id="signUpForm">
        <h4>Sign Up To Get Started</h4>
        <div className="form-group">
          {/* <label>Name</label> */}
          <input placeholder="Name"
                 type="text"
                 value={this.state.name}
                 onChange={e => this.setState({ name: e.target.value})}
                 required />
           <small className="form-text text-muted">This is how your name will appear on the site.</small>
        </div>
        <div className="form-group">
          {/* <label>Email</label> */}
          <input placeholder="Email"
                 type="email"
                 value={this.state.email}
                 onChange={e => this.setState({ email: e.target.value})}
                 required />
           <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          {/* <label>Password</label> */}
          <input placeholder="Password"
                 type="password"
                 value={this.state.password}
                 onChange={e => this.setState({ password: e.target.value})}
                 minlength="5"
                 maxlength="16"
                 required />
           <small className="form-text text-muted">Must be between 5-16 characters long.</small>
        </div>
        <button className="btn btn-primary"
                onClick={e => this.onSubmit(e)}>Ready to Join</button>
      </form>
    )
  }
}

export default SignUp
