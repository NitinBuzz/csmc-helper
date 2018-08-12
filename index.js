const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const ref = require('./firebase');
const helper = require('./firebase_helpers');
const nodemailer = require('nodemailer');
const _ = require('lodash');

const app = express();

app.use(bodyParser.json());

app.get('/api/server', function(req, res) {
  res.send('Hello World! from server');
});

app.get('/api/issues', function(req, res) {
  let issues = helper.getIssues();
  console.log(`issues get: ${JSON.stringify(helper.getIssues())}`);
  res.send(issues);
  res.end();
});

app.post('/api/user', function(req, res) {
  console.log(req);
});

app.get('/api/proxy/my/path', function(req, res) {
  res.send('Hello Worldzzzz! from server');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/public'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
