import React from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import NewPost from './main-components/NewPost';
import Post from "./main-components/Post";
import Home from './main-components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>MicroBlog</h1>
        <p>Get in the Rithm of blogging</p>
        <nav>
          <NavLink exact to='/'>Blog</NavLink>
          <NavLink exact to='/new'>Add new post</NavLink> 
        </nav>
      </header>

      <Switch>
        <Route exact path='/new'>
          <NewPost />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/:postId'>
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
