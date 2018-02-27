import React, {Component} from 'react';

class CommunityMemberSingleList extends Component {
  constructor() {
    super();
    this.state = {
      moviesFromOneList: []
    }
  }
  componentWillMount() {
    fetch('http://localhost:8080/api/movie_lists').then((res) => {
      return res.json();
     }).then((json) => {
       console.log(json);
       this.setState({
         moviesFromOneList:json
     })
   });
  }
  render() {
    return (
      <div id="communityMemberSingleList">
        <h1>Movie Lists of: (Member's Name)</h1>
        <hr/>
        { this.state.moviesFromOneList.map(eachmovieFromOneList => {
          return(
            <div className="card text-white bg-dark">

              <img className="card-img-top"
                   src={ `https://image.tmdb.org/t/p/w500` + eachmovieFromOneList.image }
                   alt="movie poster" />
              <div className="card-body">
                <h4 className="card-title">{ eachmovieFromOneList.title }</h4>
                <p className="card-text">{ eachmovieFromOneList.description }</p>
              </div>

            </div>
          )}
        )}
      </div>
   );
  }
}

export default CommunityMemberSingleList
