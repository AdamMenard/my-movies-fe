import React, {Component} from 'react';
import $ from 'jquery';

class ApiSearch extends Component {
  constructor(){
    super();
  }

  movie_api = "http://api.themoviedb.org/3/search/movie";

  componentDidMount(){
    getAndRenderMovies();
    $("form").on("submit", function(e) {
      e.preventDefault();
      getAndRenderMovies();
    });
  };

  getAndRenderMovies() {
    $.ajax({
      method: "GET",
      url: movie_api,
      data: $("form").serialize(),
      dataType: "jsonp",
      success: onSuccess,
      error: onError
    });
  }

  onSuccess(json) {
    console.log(json);
    for(let res of json.results){
    $(".movies").append(res.title + '</br>' + res.overview + '</br>' + (`<img src="https://image.tmdb.org/t/p/w200/${res.poster_path}">`) );
    }
  }

  onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem with the API!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
  }

  render() {
    return (
      <div>
        <h1>test-api-MyMovies</h1>
        <form class="form-inline">
            <label>Search Movies</label>
            <input type="text" class="form-control" name="query" value="terminator" placeholder="search movies">
            <input type="hidden" name="api_key" value="fa2ca4d107cc5c945afc0d149bd3b890">
            <!-- <input type="hidden" name="callback" value="onSuccess"> -->
            <input type="submit" value="Go!" class="btn btn-primary">
          </form>
        <div class="movies"></div>
      </div>
   );
  }
}


export default ApiSearch
