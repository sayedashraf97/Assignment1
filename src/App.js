import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import PostView from './PostView';
import PostList from './PostList';

function App() {
  return (
    <Router>
      <div className="wrapper">
      
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/post-view" component={PostView} />
          <PostList/>
     
      </div>
    </Router>
  );
}

export default App;
