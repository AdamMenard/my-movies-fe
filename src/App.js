import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import MyRoutes from './config/routes.js';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        { MyRoutes }
        <Footer/>
      </div>
    );
  }
}

export default App;
