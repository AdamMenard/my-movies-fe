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
    console.log(this.props.history)
    console.log(this.props)
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.name,
        email: this.state.email,
        password: this.state.password,
        })
      }).then((res) => {
        return res.json()
      }).then((json) => {
        console.log(json);
        this.props.history.push(`/userProfile/${json._id}`);
      })
  }
  render(){
    return(
      <div className="container">
        <h4>Sign Up To Get Started</h4>
        <form id="signUpForm" method="POST" action="/api/users">
          <div className="form-group">
            {/* <label>Name</label> */}
            <input className="form-control"
                   placeholder="Name"
                   type="text"
                   value={this.state.name}
                   onChange={e => this.setState({ name: e.target.value})}
                   required
                   autoFocus />
             <small className="form-text text-muted">This is how your name will appear on the site.</small>
          </div>
          <div className="form-group">
            {/* <label>Email</label> */}
            <input className="form-control"
                   placeholder="Email"
                   type="email"
                   value={this.state.email}
                   onChange={e => this.setState({ email: e.target.value})}
                   required />
             <small className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            {/* <label>Password</label> */}
            <input className="form-control"
                   placeholder="Password"
                   type="password"
                   value={this.state.password}
                   onChange={e => this.setState({ password: e.target.value})}
                   minLength="5"
                   maxLength="16"
                   required />
             <small className="form-text text-muted">Must be between 5-16 characters long.</small>
          </div>
          <button className="btn btn-primary"
                  onClick={e => this.onSubmit(e)}>Ready to Join</button>
        </form>
        <hr/>
        <hr/>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Sign Up 2nd</h2>
                <br/>
                <form method="POST" action="/signUp">
                  <div className="form-group">
                    <input type="text" name="username" className="form-control" placeholder="Username" autofocus />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-block btn-primary" value="Sign Up" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
