const firebase = require('firebase');
const database = require('./firebase');
const _ = require('lodash');
let issuesObj = {};
const ref = firebase.database().ref();
const getIssues = (req, res) => {
  ref
    .once('value')
    .then(snapshot => {
      _.assign(issuesObj, snapshot.val());
    })
    .catch(error => {
      _.merge(issuesObj, { error });
    });
  console.log(`helper: ${JSON.stringify(issuesObj)}`);
  return issuesObj;
};

module.exports.getIssues = getIssues;
