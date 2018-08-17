import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';

import SearchBar from './searchBar';
import IssuesBoard from './issuesBoard';
import Footer from './footer';

import img from './../../public/resources/csmc_login.png';
import headImg from './../../public/resources/header.JPG';
import classes from './../../style/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }

  componentWillUnmount() {}

  render() {
    {
    }
    return (
      <div
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0
        }}
      >
        <div>
          <div
            style={{
              padding: 0,
              margin: 0,
              height: '100vh',
              backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${headImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(' - 50 + '%, ' - 50 + '%)'
              }}
            >
              <h1
                style={{
                  color: '#ffffff',
                  fontSize: '300%',
                  fontWeight: '300',
                  letterSpacing: '1px',
                  wordSpacing: '3px',
                  marginBottom: '20px'
                }}
              >
                CSMC Helper Kit
              </h1>
            </div>
          </div>
          <SearchBar />
          <IssuesBoard />
          <Footer />
        </div>
      </div>
    );
  }
}
