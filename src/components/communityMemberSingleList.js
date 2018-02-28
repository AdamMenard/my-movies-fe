import React, {Component} from 'react';

class CommunityMemberSingleList extends Component {
  constructor() {
    super();
    this.state = {
      moviesFromOneList: []
    }
  }
  componentWillMount() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/movie_lists`).then((res) => {
      return res.json();
     }).then((json) => {
       console.log(json);
       this.setState({
         moviesFromOneList:json
     })
   });
  }
  render() {
    console.log(this.state.moviesFromOneList)
    return (
      <div id="communityMemberSingleList">
        <h1>Movie Lists of: (Member's Name)</h1>
        <hr/>
        { this.state.moviesFromOneList.map(eachmovieFromOneList => {
          return (<div>
          {
            eachmovieFromOneList.movies.map(eachMovieData => {
              return(
                <div className="card text-white bg-dark">
                  <img className="card-img-top"
                       src={ `https://image.tmdb.org/t/p/w500` + eachMovieData.image }
                       alt="movie poster" />
                  <div className="card-body">
                    <h4 className="card-title">{ eachMovieData.title }</h4>
                    <p className="card-text">{ eachMovieData.description }</p>
                  </div>
                </div>
                )
              })
            }
          </div>
          )
        })
      }
    </div>
  )
}

}
export default CommunityMemberSingleList
