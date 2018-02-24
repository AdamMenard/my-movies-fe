import React, {Component} from 'react';
import $ from 'jquery';

class ApiSearch extends Component {
  constructor(){
    super();
    this.state = {
      movieSearch: []
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // this.movieSearch = this.movieSearch.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault()
    let movieSearch = this.refs.movieSearch.value;
    fetch('http://localhost:8080/api/movies?query=' + movieSearch)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({movieSearch: json.results});
    });
  }

  render() {
    return (
      <div>
        <h1>API MyMovies</h1>
        <form className="form-inline" onSubmit={ this.onFormSubmit }>
          <label>Search Movies</label>
          <input
            type="text"
            // className="form-control"
            // name="query"
            // value="terminator"
            placeholder="search movies"
            ref="movieSearch"/>
          {/* <input
            type="hidden"
            name="api_key"
            value="fa2ca4d107cc5c945afc0d149bd3b890"/> */}
          {/* <input
            type="hidden"
            name="callback"
            value="onSuccess"/> */}
          <input
            type="submit"
            value="Go!"
            className="btn btn-primary"/>
        </form>
        <div className="movies">
          { this.state.movieSearch.map(eachMovie => {
              return(
                <div>
                  <p>{ eachMovie.title }</p>
                  <p>{ eachMovie.overview }</p>
                  <li><img src={ `https://image.tmdb.org/t/p/w200//` + eachMovie.poster_path } /></li>
                </div>
              )
            }
          ) }
        </div>
      </div>
   );
  }
}


export default ApiSearch
