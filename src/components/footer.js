import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        {/* <div className="container">
          <div className="row"> */}
          <h2 className="logo">MyMovies</h2>
          <p>&copy;
            <span>2018</span>
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/" className="fa fa-facebook">Facebook</a>
            <a href="https://www.instagram.com/?hl=en" className="fa fa-instagram">Instagram</a>
            <a href="https://www.pinterest.com/" className="fa fa-pinterest">Pinterest</a>
            <a href="https://twitter.com/?lang=en" className="fa fa-twitter">Twitter</a>
          </div>
          {/* </div>
        </div> */}
      </footer>
    );
  }
}

export default Footer;
