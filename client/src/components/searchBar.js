import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterIssues } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: ''
    };
  }

  handleSearch(e) {
    this.setState({ searchKey: e.target.value });
  }

  handleGoClick() {
    // if (!this.props.github.isFetchingUser) {
    //   this.props.actions.fetchUser(this.state);
    // }
    this.props.actions.filterIssues(this.state.searchKey);
    console.log(`${this.state.searchKey}`);
  }

  render() {
    return (
      <div className="searchbar-container">
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            size="45"
            placeholder="enter keyword"
            onChange={this.handleSearch.bind(this)}
            value={this.state.searchKey}
          />
          <button type="submit" onClick={this.handleGoClick.bind(this)}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    issues: state.issues
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     filterIssues: searchKey =>
//       dispatch({
//         type: 'FILTER_ISSUES',
//         searchKey: searchKey
//       })
//   };
// };
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ filterIssues }, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
