import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import About from './components/about';
import Projects from './components/projects';
import Photography from './components/photography';
import Contact from './components/contact';
import NoMatch from './components/NoMatch';
import Home from './components/home';
import CreativeProcess from './components/creativeprocess';
import ReadingList from './components/readinglist';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/reactstasapp" component={App}>
      <IndexRoute component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/photography" component={Photography} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/creativeprocess" component={CreativeProcess} />
        <Route path="/readinglist" component={ReadingList} />
        <Route path="/*" component={NoMatch} />
    </Route>
  </Router>),
  document.getElementById('root')
);
