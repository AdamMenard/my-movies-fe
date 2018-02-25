import React, {Component} from 'react';

class Community extends Component {
  constructor() {
    super();
    this.state = {
      community: []
    }
  }
  componentWillMount() {
    fetch('http://localhost:8080/api/users').then((res) => {
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
        <h1>Community component</h1>
        <hr/>
        { this.state.community.map(eachMember => {
          return(
            <div>
              <h4>{ eachMember.name }</h4>
            </div>
          )}
        )}
      </div>
   );
  }
}

export default Community
