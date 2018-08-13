import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { getIssues } from '../actions';

import Issue from './issue';

class IssuesBoard extends Component {
  constructor(props) {
    super(props);
    // this.state = { issues: {} };
  }
  componentDidMount() {
    console.log(`get ichues  ${this.props.actions.getIssues()}`);
    // axios.get('/api/get/issues').then(res => {
    //   console.log(`Yeyyyyy ------ ${JSON.stringify(res.data.issues)}`);
    //   this.setState({ issues: res.data.issues });
    // });
  }

  componentWillUnmount() {}

  render() {
    const val =
      Object.keys(this.props.issues).length > 0 ? (
        Object.keys(this.props.issues).map(key => {
          console.log(key);
          {
            return <Issue issue={this.props.issues[key]} />;
          }
        })
      ) : (
        <div>No</div>
      );

    return (
      <div>
        <div>DashBoard</div>
        <div>{val}</div>
        <div />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(`eeeeeee: ${JSON.stringify(state)}`);
  return { issues: state.issues };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ getIssues }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesBoard);
