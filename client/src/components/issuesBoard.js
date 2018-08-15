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
    //this.props.actions.getIssues();
  }

  componentWillUnmount() {}

  render() {
    const val =
      Object.keys(this.props.issues).length > 0 ? (
        Object.keys(this.props.issues).map(key => {
          {
            return <Issue issue={this.props.issues[key]} />;
          }
        })
      ) : (
        <div
          style={{
            marginTop: '15px',
            marginBottom: '35px',
            color: '#1379CD',
            fontFamily: 'Ubuntu',
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
          Please Seach for Helpers - Some keywords [NSX, Socket, vCenter, CSDB,
          PRS, LOGIN, CURL]
        </div>
      );

    return (
      <div
        style={{
          margin: '0',
          padding: '0',
          margin: '5px 15px',
          fontFamily: 'Roboto',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            marginTop: '30px',
            color: '#ffffff',
            fontFamily: 'Ubuntu',
            fontSize: '25px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}
        >
          DashBoard
        </div>
        <div>{val}</div>
        <div />
      </div>
    );
  }
}

const mapStateToProps = state => {
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
