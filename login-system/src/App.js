import React from 'react';
import './App.css';
import Shopping from './Shopping'
import { BrowserRouter as Router, NavLink, Redirect, BrowserRouter } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Register from './Register'
import Login from './Login'

function App() {
  return (

    <Router className="router">
      {/* <div className="App">

        <li><NavLink exact to='/login'>Login</NavLink></li>
        <li><NavLink exact to='/register'>Register</NavLink></li>
        <li><NavLink exact to='/all'>All</NavLink></li>
        <li><NavLink exact to='/bags'>Bags</NavLink></li>
        <li><NavLink exact to='/cakes'>Cakes</NavLink></li>
        <li><NavLink exact to='/games'>Games</NavLink></li>
      </div> */}
      <Route exact path='/all' component={Shopping}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Router>


  );
}

export default App;
