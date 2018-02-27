import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import CommunityMemberSingleList from '../components/communityMemberSingleList';

class CommunityMemberAllLists extends Component {
  constructor() {
    super();
    this.state = {
      movieListsforOneMember: []
    }
  }
  componentWillMount() {
    fetch('https://my-movies-be.herokuapp.com/api/movie_lists').then((res) => {
      return res.json();
     }).then((json) => {
       console.log(json);
       this.setState({
         movieListsforOneMember:json
       })
   });
  }
  render() {
    return (
      <div id="communityMemberAllLists">
        <h1>Movie Lists of: (Member's Name)</h1>
        <hr/>
        { this.state.movieListsforOneMember.map(eachmovieFromOneList => {
          return(
            <div className="card text-white bg-dark col-sm-6 col-md-4 col-lg-3">
              <div className="card-body">
                <Link to="/communityMemberSingleList">
                  <h4 className="card-title">{ eachmovieFromOneList.title }</h4>
                </Link>
              </div>
            </div>
        )}
      )}
    </div>
    );
  }
}

export default CommunityMemberAllLists
