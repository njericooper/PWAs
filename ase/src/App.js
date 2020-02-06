import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './Ase_logo_white.png';
import './App.css';

const Page = ({ title }) => (
    <div className="App container">
      <div className="nav">
        <ul className="nav-items">
        <li><a><Link to="/">Home</Link></a></li>
        <li><a><Link to="/about">About</Link></a></li>
        <li><a><Link to="/settings">Settings</Link></a></li>
        </ul>
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          This is the {title} page.
        </p>
      </div>
    </div>
);
const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}

export default App;