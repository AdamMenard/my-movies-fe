import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MyLists extends Component {
  constructor() {
    super();
    this.state = {
      movieLists: []
    }
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
  render() {
    return (
      <div id="myLists">
        <h1>MyMovies Lists</h1>
        <hr/>
        { this.state.movieLists.map(eachMovieList => {
          return(
            <div>
              <Link to={`/communityMemberSingleList/${ eachMovieList._id }`}><h4>{ eachMovieList.title }</h4></Link>
            </div>
          )}
        )}
      </div>
   );
  }
}

export default MyLists
