import React, {Component} from 'react';

class CommunityMemberSingleList extends Component {
  constructor() {
    super();
    this.state = {
      moviesFromOneList: {}
    }
  }
  componentWillMount() {
    let list_id = this.props.match.params.id
    console.log(list_id)
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/movie_lists/${list_id}`).then((res) => {
      return res.json();
     }).then((json) => {
       console.log(json);

       this.setState({
         moviesFromOneList: json
     })
   });
  }
  render() {
    console.log(this.state.moviesFromOneList)
    return (
      <div id="communityMemberSingleList">
        <h1>MyMovies <span role="img" aria-label="MClip">🎬</span>: {this.state.moviesFromOneList.title}</h1>
        <hr/>
          { this.state.moviesFromOneList.title &&
            this.state.moviesFromOneList.movies.map(eachMovieData => {
              return(

                <div id="communityMemberSingleListEachMovie" className="card text-white bg-dark">

                  <img className="card-img-top"
                       src={ `https://image.tmdb.org/t/p/w500` + eachMovieData.image }
                       alt="movie poster" />
                  <div className="card-body">
                    <h4 className="card-title">{ eachMovieData.title }</h4>
                    {/* <button className="btn btn-primary col-sm-12"
                            type="button"
                            data-toggle="collapse"
                            data-target="#movieDescription"
                            aria-expanded="false"
                            aria-controls="movieDescription">Movie Overview</button>
                    <div className="collapse" id="movieDescription">
                      <p className="card-text">{ eachMovieData.description }</p>
                    </div> */}
                    <p className="card-text">{ eachMovieData.description }</p>
                  </div>

                </div>
                )
              })
            }

    </div>
  )
}

}
export default CommunityMemberSingleList
