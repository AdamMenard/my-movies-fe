import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MyLists extends Component {
  constructor() {
    super();
    this.state = {
      movieLists: [],
      editedMovieListTitle: []
    }
    this.onDeleteMovieList = this.onDeleteMovieList.bind(this);
    this.onEditMovieList = this.onEditMovieList.bind(this);
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
  onEditMovieList(e, eachMovieListId) {
    console.log('Edit button Clicked')
    // let newMovieListTitle = this.state.editedMovieListTitle
    // fetch(`${process.env.REACT_APP_BACKEND_URL}/api/movie_lists/${ eachMovieListId }`, {
    //   method: 'PUT',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     title: newMovieListTitle
    //   }),
    // }).then((res) => {
    //     return res.json()
    // }).then((json) => {
    //   newMovieListTitle.update(function(eachList) {
    //       // return
    //     });
    //     this.setState({ movieLists: newMovieListTitle})
    // });
  }
  render() {
    return (
      <div id="myLists" className="container">
        <div className="row col-12">
          <h1>MyMovies Lists</h1>
        </div>
        <hr/>
        { this.state.movieLists.map(eachMovieList => {
          return(
            <div id="movieList" className="row col-3">
              <Link to={`/communityMemberSingleList/${ eachMovieList._id }`}>

                <h4>{ eachMovieList.title }</h4></Link>
              <button class="btn btn-info"
                      onClick={e => this.onEditMovieList(e, eachMovieList._id)}>Edit:{ eachMovieList.title }</button>
              {/* COMMENT: && operator checks for 'eachMovieList._id' to load before displaying delete button */}
              {/* { eachMovieList._id && */}
              <button className="btn btn-danger"
                      onClick={e => this.onDeleteMovieList(e, eachMovieList._id)}>Delete Movie List</button>
                    {/* } */}
            </div>
          )}
        )}
      </div>
   );
  }
}

export default MyLists
