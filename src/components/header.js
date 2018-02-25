import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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

          <button id="login" className="btn btn-outline-dark" data-toggle="modal" data-target="#loginModal">Login</button>

          {/* <button type="button" className="btn btn-primary" >
            Launch demo modal
          </button> */}

          <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="loginModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Login
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

          <Link to='/community'><h3>Other People</h3></Link>
          <Link to='/userProfile'><h3>MyLists</h3></Link>
          <Link to='/'><h3>About</h3></Link>
        </ul>
      </header>
    )
  }
}

export default Header
