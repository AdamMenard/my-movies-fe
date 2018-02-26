import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import CommunityMemberSingleList from '../components/communityMemberSingleList';

class CommunityMemberAllLists extends Component {
  render() {
    return (
      <div>
        <h1>CommunityMemberAllLists Component</h1>
        <Link to="/communityMemberSingleList"><h4>List of Each Member's <u>MyLists</u> as individual links</h4></Link>
      </div>
    );
  }
}

export default CommunityMemberAllLists
