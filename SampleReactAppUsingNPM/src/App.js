import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { rudderInitialize, eventIdentify, eventPage, eventTrack } from './eventGenerate';
import {jsonLoad} from './utilities';


class App extends Component {

  componentDidMount() {

   
    // if (rudderKey != null && rudderKey !== '' && !rudderKey.startsWith('placeholder')) {
    //   var methods = [
    //     "load",
    //     "page",
    //     "track",
    //     "identify",
    //     "trackEvent",
    //     "trackPage",
    //     "identifyUser",
    //     "reset"
    //   ];

    //   var rudderanalytics = global.window.rudderanalytics = global.window.rudderanalytics || [];
    //   rudderanalytics.methods = methods;
    //   rudderanalytics.factory = function (t) {
    //     return function (...args) {
    //       var e = Array.prototype.slice.call(args);
    //       e.unshift(t);
    //       rudderanalytics.push(e);
    //       return rudderanalytics
    //     }
    //   };
    //   for (var t = 0; t < rudderanalytics.methods.length; t++) {
    //     var e = rudderanalytics.methods[t]; rudderanalytics[e] = rudderanalytics.factory(e)
    //   }
    //   rudderanalytics.loadRudder = function () {
    //      rudderanalytics.load(rudderKey, "http://localhost:8080", {configUrl: "https://api.dev.rudderlabs.com"});
    //     // rudderanalytics.load(rudderKey, "http://192.168.43.34:8080", "DEBUG");
    //     var e = document.createElement("script");
    //     e.type = "text/javascript";
    //     e.async = !0;
    //     e.src = "https://cdn.rudderlabs.com/rudder-analytics.min.js";
    //     var n = document.getElementsByTagName("script")[0];
    //     n.parentNode.insertBefore(e, n);
    //   };
      // rudderanalytics.loadRudder();
      // rudderanalytics.reset();
    // }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div id="main-area">
          <ul id="horizontal-list">
          <li id = "initialize-list">
              <button id="btn-initialize" onClick={() => rudderInitialize()} >
                Initialize Rudder
              </button>
            </li><br></br>

            <li id = "identify-list">
              <textarea id="identify-textarea" cols="50" rows="10" onClick={() => jsonLoad()}></textarea><br></br>
              <input type="text" id="identify-count" /><br></br>
              <button id="btn-idntfy" onClick={() => eventIdentify()} >
                Idetify
              </button>
            </li><br></br>
            <li id = "page-list">
              <textarea id="page-textarea" cols="50" rows="10"></textarea><br></br>
              <input type="text" id="page-count" /><br></br>
              <button id="btn-page" onClick={() => eventPage()} >
                Page
              </button>
            </li><br></br>
            <li id="track-list">
              <textarea id="track-textarea" cols="50" rows="10"></textarea><br></br>
              <input type="text" id="track-count" /><br></br>
              <button id="btn-track" onClick={() => eventTrack()} >
                Track
              </button>
            </li><br></br>
          </ul>

          <button id="btn-submit" type="submit">
                Submit
              </button>
              <a src="http://localhost:3000">
                Link
                </a>
          </div>
        </header>

      </div>
    );
  }
}

export default App;



