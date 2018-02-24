import React, {Component} from 'react';
import ApiSearch from '../components/apiSearch';
import MyLists from '../components/myLists';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <ApiSearch/>
        <MyLists/>
      </div>

   );
  }
}

export default UserProfile
