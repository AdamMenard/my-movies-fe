import React, {Component} from 'react';
// import $ from 'jquery';

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
        <hr/>
        <form className="form-inline" onSubmit={ this.onFormSubmit }>
          <label><strong>Search Movies</strong></label>
          <input
            type="text"
            placeholder="movie title"
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
                <div class="card text-white bg-dark col-sm-3">
                  <img class="card-img-top"
                       src={ `https://image.tmdb.org/t/p/w500//` + eachMovie.poster_path }
                       alt="movie poster" />
                  <div class="card-body">
                    <h5 class="card-title"><strong>{ eachMovie.title }</strong></h5>
                    <button class="btn btn-primary col-sm-12"
                            type="button"
                            data-toggle="collapse"
                            data-target="#movieDescription"
                            aria-expanded="false"
                            aria-controls="movieDescription">Movie Overview</button>
                    <div class="collapse" id="movieDescription">
                      <p class="card-text">{ eachMovie.overview }</p>
                    </div>
                    <button id="addToListButton" href="#" class="btn btn-primary col-sm-12">Add to MyLists</button>
                  </div>
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
