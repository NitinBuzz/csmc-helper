import axios from 'axios';

export const decrementCounter = () => ({
  type: 'COUNTER_DECREMENT'
});

export const filterIssues2 = key => ({
  type: 'FILTER_ISSUES',
  issues: key
});

export const getIssues2 = issues => ({
  type: 'GET_ISSUES',
  issues
});

export const filterIssues = key => {
  return dispatch => {
    axios
      .get(`/api/get/issues/search/${key}`)
      .then(res => {
        console.log(`Filter Action Get ------- ${JSON.stringify(res.data)}`);
        dispatch(filterIssues2(res.data));
      })
      .catch(error => {
        console.log(`error: ${error}`);
      });
  };
};

export const getIssues = () => {
  return dispatch => {
    axios
      .get('/api/get/issues')
      .then(res => {
        console.log(`Action Get ------- ${JSON.stringify(res.data.issues)}`);
        dispatch(getIssues2(res.data.issues));
      })
      .catch(error => {
        console.log(`error: ${error}`);
      });
  };
};
