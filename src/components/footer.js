import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <h2 className="logo">MyMovies</h2>
        <p>&copy;
          <span>2018</span>
        </p>
        <div className="footer-social">
          <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
          <a href="https://www.instagram.com/?hl=en" class="fa fa-instagram"></a>
          <a href="https://www.pinterest.com/" class="fa fa-pinterest"></a>
          <a href="https://twitter.com/?lang=en" class="fa fa-twitter"></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
