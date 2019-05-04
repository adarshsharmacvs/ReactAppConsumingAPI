import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import GetAllComments from "./pages/GetAllComments";
import AddComment from "./pages/AddComment";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <img
              src="https://media.agilitycms.com/logos/Agility-logo-2014.svg"
              className="App=logo"
              class="center"
              alt="logo"
            />
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/add-comment"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Add Comment
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                All Comments
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/add-comment"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Add Comment
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                All Comments
              </NavLink>
            </div>

            <Route exact path="/" component={GetAllComments} />
            <Route path="/add-comment" component={AddComment} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
