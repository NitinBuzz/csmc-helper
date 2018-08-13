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

app.get('/api/get/issues', function(req, res) {
  helper
    .getIssues()
    .then(issues => {
      console.log(`issues get: ${JSON.stringify(`yey ---- : ${issues}`)}`);
      res.json(issues);
      res.end();
    })
    .catch(error => {
      res.status(503).send(`DataBase Error, please try again: ${error}`);
      console.log(`DB Error: ${error}`);
    });
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
