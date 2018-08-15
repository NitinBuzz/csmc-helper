import React, { Component } from 'react';

import card1img from './../../public/resources/card1.JPG';
import card2img from './../../public/resources/card2.JPG';
import card3img from './../../public/resources/card3.jpg';
import card4img from './../../public/resources/card4.jpg';
import bdayImg from './../../public/resources/step.JPG';

class Issue extends Component {
  constructor(props) {
    super(props);
    // this.state = { issues: {} };
  }
  render() {
    return (
      <div>
        <p
          style={{
            borderTop: '3px solid #333333',
            margin: '1em 0'
          }}
        />
        <div
          style={{
            margin: '10px',
            padding: '10px',
            height: 'auto',
            fontFamily: 'Ubuntu',
            overflow: 'hidden',
            lineHeight: '1.6',
            backgroundImage: ` linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${bdayImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff'
          }}
        >
          <div
            style={{
              float: 'left',
              display: 'block',
              marginLeft: '20px',
              paddingRight: '5px',
              borderLeft: '2px solid #ff0000'
            }}
          >
            <span style={{ paddingLeft: '2px' }}>Issue Title:</span>{' '}
            {this.props.issue.name}
          </div>
          <br />
          <p
            style={{
              margin: '1em 0'
            }}
          />
          <div
            style={{
              float: 'left',

              display: 'block',
              marginLeft: '20px',
              borderLeft: '2px solid #f1ff00'
            }}
          >
            <span style={{ paddingLeft: '2px' }}>What:</span>{' '}
            {this.props.issue.work[0]}
          </div>
          <br />
          <p
            style={{
              margin: '1em 0'
            }}
          />
          <div
            style={{
              float: 'left',
              marginLeft: '20px',
              borderLeft: '2px solid #008C00'
            }}
          >
            <span style={{ paddingLeft: '2px' }}>Root Cause:</span>{' '}
            {this.props.issue.work[1]}
          </div>
          <br />{' '}
          <p
            style={{
              margin: '1em 0'
            }}
          />
          <div
            style={{
              float: 'left',
              marginLeft: '20px',
              borderLeft: '2px solid #1379CD'
            }}
          >
            <span style={{ paddingLeft: '2px' }}>How to move ahead:</span>{' '}
            {this.props.issue.work[2]}
          </div>
          <br />{' '}
          <p
            style={{
              margin: '1em 0'
            }}
          />
          <div
            style={{
              float: 'left',
              marginLeft: '20px',
              borderLeft: '2px solid #EC8B00'
            }}
          >
            <span style={{ paddingLeft: '2px' }}> Workarounds:</span>{' '}
            {this.props.issue.work[3]}
          </div>
          <br /> <p style={{}} />
        </div>
      </div>
    );
  }
}

export default Issue;
