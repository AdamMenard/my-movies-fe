import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Login from '../components/login';
import SignUp from '../components/signUp';

class Header extends Component {
  render(){
    return(
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1> */}
        <div className="logo">
          <h1>MyMovies</h1>
        </div>
        <ul id="nav">

          <button id="signUp" className="btn btn-outline-dark" type="button" data-toggle="modal" data-target="#signUpModal">Sign Up</button>
            <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog"  aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <SignUp/>
                  </div>
                </div>
              </div>
            </div>

          <button id="login" className="btn btn-outline-dark" type="button" data-toggle="modal" data-target="#loginModal">Login</button>
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog"  aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <Login/>
                  </div>
                </div>
              </div>
            </div>

          <Link className="navLinks" to='/community'><h3>Other People</h3></Link>
          <Link className="navLinks" to='/userProfile'><h3>MyLists</h3></Link>
          <Link className="navLinks" to='/'><h3>About</h3></Link>
        </ul>
      </header>
    )
  }
}

export default Header
