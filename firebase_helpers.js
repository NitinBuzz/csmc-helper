const firebase = require('firebase');
const database = require('./firebase');
const _ = require('lodash');
let issuesObj = {};
let filteredObj = {};
let filteredObj2 = {};
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

const getFilteredIssues = params => {
  return new Promise((resolve, reject) => {
    getIssues().then(res => {
      // console.log(`Issues lo -- ${JSON.stringify(issues.issues)}`);

      _.filter(res.issues, function(o) {
        //console.log(`Filter Obj lo -- ${JSON.stringify(o)}`);
        o.tags.forEach(str => {
          console.log(`str -- ${str.toString()} and ${params.toString()}`);
          if (str == params) {
            console.log(`trueeeeeeee`);
            filteredObj = _.assignIn(filteredObj, { o });
            return;
          }
        });
      });

      console.log(`Filter Obj lo -- ${JSON.stringify(filteredObj)}`);
      filteredObj2 = {};
      Object.keys(res.issues).map(key => {
        res.issues[key].tags.forEach(str => {
          if (str == params) {
            console.log(`indiloo`);
            return (filteredObj2 = _.assign({
              ...filteredObj2,
              [key]: res.issues[key]
            }));
          }
        });
      });
      // _.filter(res.issues, function(o) {
      //   o.tags.forEach(str => {
      //     if (str == params) {
      //       console.log(`indiloo`);
      //       return _.assign({ ...filteredObj2, ...o });
      //     }
      //   });
      // });

      console.log(`Lolll Filter Obj lo -- ${JSON.stringify(filteredObj2)}`);
    }, resolve(filteredObj2));
  });
};

//getFilteredIssues
module.exports.getIssues = getIssues;
module.exports.getFilteredIssues = getFilteredIssues;
