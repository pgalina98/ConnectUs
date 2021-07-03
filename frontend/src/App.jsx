import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Homepage from "./pages/homepage/Homepage";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(UserContext);

  console.log("USER: ", user);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route exact path="/">
            {user ? <Homepage /> : <Login />}
          </Route>
          <Route path="/profile/:userId">
            <Profile />
          </Route>
          <Route path="/messenger">
            {!user ? <Redirect to="/" /> : <Messenger />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
