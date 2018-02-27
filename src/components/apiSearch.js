import React, {Component} from 'react';
import AddToMyLists from '../components/addToMyLists';

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
    fetch('https://my-movies-be.herokuapp.com/api/movies?query=' + movieSearch)
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
                <div className="card text-white bg-dark col-sm-3">
                  <img className="card-img-top"
                       src={ `https://image.tmdb.org/t/p/w500` + eachMovie.poster_path }
                       alt="movie poster" />
                  <div className="card-body">
                    <h5 className="card-title"><strong>{ eachMovie.title }</strong></h5>
                    <button className="btn btn-primary col-sm-12"
                            type="button"
                            data-toggle="collapse"
                            data-target="#movieDescription"
                            aria-expanded="false"
                            aria-controls="movieDescription">Movie Overview</button>
                    <div className="collapse" id="movieDescription">
                      <p className="card-text">{ eachMovie.overview }</p>
                    </div>
                    <button id="addToListButton" className="btn btn-primary col-sm-12" type="button" data-toggle="modal" data-target={ '#' + eachMovie.id}>Add to MyLists</button>
                      <div className="modal fade" id={eachMovie.id} tabIndex="-1" role="dialog"  aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body">
                              <AddToMyLists moviePoster={ eachMovie.poster_path } title={ eachMovie.title } overview={ eachMovie.overview }/>
                            </div>
                          </div>
                        </div>
                      </div>
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
