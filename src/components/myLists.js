import React, {Component} from 'react';

class MyLists extends Component {
  constructor() {
    super();
    this.state = {
      movieLists: []
    }
  }
  componentWillMount() {
    fetch('http://localhost:8080/api/movie_lists').then((res) => {
      return res.json();
     }).then((json) => {
       console.log(json);
       this.setState({
         movieLists:json
       })
   });
  }
  render() {
    return (
      <div id="myLists">
        <h1>MyMovies Lists</h1>
        <hr/>
        { this.state.movieLists.map(eachMovieList => {
          return(
            <div>
              <h4>{ eachMovieList.title }</h4>
            </div>
          )}
        )}
      </div>
   );
  }
}

export default MyLists
