import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import CommunityMemberAllLists from '../components/communityMemberAllLists';
// import CommunityMemberSingleList from '../components/communityMemberSingleList';

class Community extends Component {
  constructor() {
    super();
    this.state = {
      community: []
    }
  }
  componentWillMount() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users`).then((res) => {
      return res.json();
     }).then((json) => {
       console.log(json);
       this.setState({
         community:json
       })
   });
  }
  render() {
    return (
      <div id="community">
        <h1>MyMovies Community</h1>
        <hr/>
        { this.state.community.map(eachMember => {
          return(
            <div>
              {eachMember._id &&
              <Link to='/communityMemberAllLists'><h4>{ eachMember.name }</h4></Link>
                }
            </div>
          )}
        )}
      </div>
   );
  }
}

export default Community
