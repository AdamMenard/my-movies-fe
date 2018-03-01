import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MyLists extends Component {
  constructor() {
    super();
    this.state = {
      movieLists: []
    }
    this.onDeleteMovieList = this.onDeleteMovieList.bind(this);
  }
  componentWillMount() {
    // fetch(`${process.env.REACT_APP_BACKEND_URL}/api/movie_lists`).then((res) => {

    fetch(`http://localhost:8080/api/movie_lists`).then((res) => {
      return res.json();
     }).then((json) => {
       console.log(json);
       this.setState({
         movieLists:json
       })
   });
  }
  onDeleteMovieList(e, eachMovieListId) {
    console.log('delete MovieList button clicked')

    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/movie_lists/${ eachMovieListId }`, {
      method: 'DELETE',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
        _id: eachMovieListId

		    // title: this.state.newMovieListTitle,
        // movies: [{
        //    title: this.props.title,
        //    description: this.props.overview,
        //    image: this.props.moviePoster,
         // }]
		  }),
		}).then((res) => {
		    return res.json()
		}).then((json) => {
		    this.setState({
		    	movieLists: this.state.movieLists.remove(json)
		    });
		});

    // $('#albums').on('click', '.delete-album', function(e) {
    //   var id = $(this).closest('.album').data('album-id');
    //   console.log('id', id);
    //
    //   $.ajax({
    //     url: '/api/albums/' + id,
    //     type: 'DELETE',
    //     success: function(result) {
    //       $('[data-album-id=' + id + ']').remove();
    //     }
    //   });
    // });

  }
  render() {
    return (
      <div id="myLists">
        <h1>MyMovies Lists</h1>
        <hr/>
        { this.state.movieLists.map(eachMovieList => {
          return(
            <div>
              <Link to={`/communityMemberSingleList/${ eachMovieList._id }`}>
                <h4>{ eachMovieList.title }</h4></Link>
              <button className="btn btn-danger"
                      onClick={e => this.onDeleteMovieList(e, eachMovieList._id)}>Delete Movie List</button>
            </div>
          )}
        )}
      </div>
   );
  }
}

export default MyLists
