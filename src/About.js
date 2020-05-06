import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  componentDidMount() {
    window.rudderanalytics.page('About');
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        <p className="about-content">
        Rudder is a platform for collecting, storing and routing customer event data to dozens of tools. Rudder is open-source, can run in your cloud environment (AWS, GCP, Azure or even your data-centre) and provides a powerful transformation framework to process your event data on the fly.
        </p>
      </div>
    );
  }
}
