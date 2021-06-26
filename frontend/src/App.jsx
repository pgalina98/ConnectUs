import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/profile/:userId">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
