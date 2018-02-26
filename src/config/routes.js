import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import App from '../App'
import About from '../components/about';
import UserProfile from '../components/userProfile';
import Community from '../components/community';
import CommunityMemberAllLists from '../components/communityMemberAllLists';
import CommunityMemberSingleList from '../components/communityMemberSingleList';

export default (
  <Switch>
    <Route exact path='/' component={ About }/>
      <Route path='/userProfile' component={ UserProfile }/>
      <Route path='/community' component={ Community }/>
      <Route path='/communityMemberAllLists' component={ CommunityMemberAllLists }/>
      <Route path='/communityMemberSingleList' component={ CommunityMemberSingleList }/>
  </Switch>
)
