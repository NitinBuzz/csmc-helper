const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyCj7J5tOeNKipnRlo3xUWe-CccDLrp1fsg',
  authDomain: 'csmc-helper.firebaseapp.com',
  databaseURL: 'https://csmc-helper.firebaseio.com',
  projectId: 'csmc-helper',
  storageBucket: 'csmc-helper.appspot.com',
  messagingSenderId: '585672640544'
};
firebase.initializeApp(config);
const database = firebase.database();
const ref = firebase.database().ref();
// database.ref('issues').push({
//   name: 'Unable to Modify Layer2 Networks',
//   tags: ['Layer2', 'NSX'],
//   description: 'unable to modify layer2 n/w',
//   work: [
//     'unable to modify layer2 n/w',
//     'same',
//     'Catch exp on prs and ask NSX to work on it'
//   ],
//   date: Date.now()
// });
ref.on(
  'value',
  function(snapshot) {
    console.log(`snapshot Value :${snapshot.val()}`);
  },
  function(error) {
    console.log(error);
  }
);

module.exports = (ref, database);
