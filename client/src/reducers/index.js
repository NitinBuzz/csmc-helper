import { combineReducers } from 'redux';

const fakeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'COUNTER_INCREMENT':
      return state + 1;
    case 'COUNTER_DECREMENT':
      return state;
    default:
      return state;
  }
};

const issuesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FILTER_ISSUES':
      return state;
    case 'GET_ISSUES':
      return { ...state, ...action.issues };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  fakeReducer,
  issues: issuesReducer
});

export default rootReducer;
