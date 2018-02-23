import React, {Component} from 'react';

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

          <button id="login" className="btn btn-outline-dark">Login</button>


          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
          </button>

          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

          <a><h3>Other People</h3></a>
          <a><h3>MyLists</h3></a>
          <a><h3>About</h3></a>
        </ul>
      </header>
    )
  }
}

export default Header
