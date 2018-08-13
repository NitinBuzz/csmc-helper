import React, { Component } from 'react';

class Issue extends Component {
  constructor(props) {
    super(props);
    // this.state = { issues: {} };
  }
  render() {
    {
      console.log(`wwwwwwwwwwwwww--- ${JSON.stringify(this.props)}`);
    }
    return (
      <div>
        <div>{this.props.issue.name}</div>
        <p>Issue</p>
      </div>
    );
  }
}

export default Issue;
