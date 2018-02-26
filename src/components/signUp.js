import React, {Component} from 'react';

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
    e.preventDefault();
    fetch(`http://localhost:8080/api/users`, {
      method: 'POST',
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        })
      }).then((res) => {
        return res.json()
      }).then((json) => {
        this.props.history.push('/profiles');
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
           <small class="form-text text-muted">This is how your name will appear on the site.</small>
        </div>
        <div className="form-group">
          {/* <label>Email</label> */}
          <input placeholder="Email"
                 type="email"
                 value={this.state.email}
                 onChange={e => this.setState({ email: e.target.value})}
                 required />
           <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          {/* <label>Password</label> */}
          <input placeholder="Password"
                 type="password"
                 value={this.state.password}
                 onChange={e => this.setState({ password: e.target.value})}
                 required />
           <small class="form-text text-muted">Must be at least 5 characters long.</small>
        </div>
        <button className="btn btn-primary"
                onClick={e => this.onSubmit(e)}>Ready to Join</button>
      </form>
    )
  }
}

export default SignUp
