import React, { Component } from 'react';

import SearchBar from './searchBar';
import IssuesBoard from './issuesBoard';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {}

  render() {
    {
    }
    return (
      <div>
        <div>
          <p>Header</p>
          <SearchBar />
          <IssuesBoard />
        </div>
      </div>
    );
  }
}
