const firebase = require('firebase');
const database = require('./firebase');
const _ = require('lodash');
let issuesObj = {};
const ref = firebase.database().ref();
const getIssues = (req, res) => {
  return new Promise((resolve, reject) => {
    ref
      .once('value')
      .then(snapshot => {
        _.assign(issuesObj, snapshot.val());
        resolve(issuesObj);
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports.getIssues = getIssues;
