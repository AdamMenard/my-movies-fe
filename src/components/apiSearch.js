import React, {Component} from 'react';
import $ from 'jquery';

class ApiSearch extends Component {
  constructor(){
    super();
    this.state = {
      movieSearch: []
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
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
      <div id="apiSearch">
        <h1>API MyMovies</h1>
        <form className="form-inline" onSubmit={ this.onFormSubmit }>
          <label>Search Movies</label>
          <input
            type="text"
            placeholder="search movies"
            ref="movieSearch"
            required />
          <input
            type="submit"
            value="Show me the Movies!"
            className="btn btn-primary"/>
        </form>
        <div className="movies">
          { this.state.movieSearch.map(eachMovie => {
              return(
                <div>
                  <img src={ `https://image.tmdb.org/t/p/w200//` + eachMovie.poster_path } />
                  <p>{ eachMovie.title }</p>
                  <p>{ eachMovie.overview }</p>
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
