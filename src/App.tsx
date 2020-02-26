import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import './App.scss';
import UserList from './components/Menu/UserList/UserList';

function App() {
  return (
    <div className="App">
      <h1>Reply</h1>
      <UserList />
      {/* <Router>
        <Switch>
        <Route path="/about">
            
          </Route>
        </Switch>
      </Router> */}

    </div>
  );
}

export default App;
