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
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/movie_lists`).then((res) => {
      return res.json();
     }).then((json) => {
       console.log(json);
       this.setState({
         movieLists:json
       })
   });
  }
  onDeleteMovieList(e, eachMovieListId) {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/movie_lists/${ eachMovieListId }`, {
      method: 'DELETE',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
        _id: eachMovieListId
		  }),
		}).then((res) => {
		    return res.json()
		}).then((json) => {
      let remainingMovies = this.state.movieLists.filter(function(eachList) {
              return eachList._id !== json._id
            });
            this.setState({ movieLists: remainingMovies})
		});
  }
  onEditMovieList() {
    console.log('Edit button Clicked')
  }
  render() {
    return (
      <div id="myLists">
        <h1>MyMovies Lists</h1>
        <hr/>
        { this.state.movieLists.map(eachMovieList => {
          return(
            <div id="movieList">
              <Link to={`/communityMemberSingleList/${ eachMovieList._id }`}>
                <h4>{ eachMovieList.title }</h4></Link>
              <button class='btn btn-info'
                      onClick={e => this.onEditMovieList(e, eachMovieList._id)}>Edit:{ eachMovieList.title }</button>
              {/* && operator checks for 'eachMovieList._id' to load before displaying delete button */}
              {eachMovieList._id &&
                <button className="btn btn-danger"
                      onClick={e => this.onDeleteMovieList(e, eachMovieList._id)}>Delete Movie List</button>
                    }
            </div>
          )}
        )}
      </div>
   );
  }
}

export default MyLists
