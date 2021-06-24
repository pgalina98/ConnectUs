import React, { useState } from "react";
import "./register.css";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    showPassword: false,
  });
  const [reenteredPassword, setReenteredPassword] = useState({
    value: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleClickShowReenteredPassword = () => {
    setReenteredPassword({
      ...reenteredPassword,
      showPassword: !reenteredPassword.showPassword,
    });
  };

  const handleMouseDownReenteredPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegisterSubmit = () => {
    //TODO -> Register New user - send Axios request to API
    console.log("Username submit:" + username);
  };

  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerWrapperLeft">
          <h3 className="registerWrapperLeftLogo">Connect Us</h3>
          <span className="registerWrapperLeftDescription">
            Connect with friends and the world around you on Connect Us.
          </span>
        </div>
        <div className="registerWrapperRight">
          <div className="registerWrapperRightContainer">
            <TextField
              id="username"
              label="Enter your username"
              variant="outlined"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              id="email"
              label="Enter your e-mail"
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <FormControl variant="outlined">
              <InputLabel htmlFor="password">Enter your password</InputLabel>
              <OutlinedInput
                id="password"
                type={password.showPassword ? "text" : "password"}
                value={password.value}
                onChange={(event) => setPassword({ value: event.target.value })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {password.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={150}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="reenteredPassword">
                Re-enter your password
              </InputLabel>
              <OutlinedInput
                id="reenteredPassword"
                type={reenteredPassword.showPassword ? "text" : "password"}
                value={reenteredPassword.value}
                onChange={(event) =>
                  setReenteredPassword({ value: event.target.value })
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowReenteredPassword}
                      onMouseDown={handleMouseDownReenteredPassword}
                      edge="end"
                    >
                      {reenteredPassword.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={170}
              />
            </FormControl>
            <button
              className="registerWrapperRightContainerRegisterButton"
              onClick={handleRegisterSubmit}
            >
              Sign Up
            </button>
            <button className="registerWrapperRightContainerLoginButton">
              Already have an Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
