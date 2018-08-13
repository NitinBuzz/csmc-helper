import axios from 'axios';

export const decrementCounter = () => ({
  type: 'COUNTER_DECREMENT'
});

export const filterIssues = key => ({
  type: 'FILTER_ISSUES',
  searchKey: key
});

export const getIssues2 = issues => ({
  type: 'GET_ISSUES',
  issues
});

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
