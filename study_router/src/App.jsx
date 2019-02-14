import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to Home.</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
);

const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/friends">Friends</Link></li>
      </ul>
      <hr/>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </React.Fragment>
  </BrowserRouter>
);


export default App;