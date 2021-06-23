import React, { useState } from "react";
import "./login.css";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export default function Login() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState({
    value: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLoginSubmit = () => {
    //TODO -> Check user data - send Axios request to API
    console.log("Username submit:" + username);
  };

  return (
    <div className="container">
      <div className="loginWrapper">
        <div className="loginWrapperLeft">
          <h3 className="loginWrapperLeftLogo">Connect Us</h3>
          <span className="loginWrapperLeftDescription">
            Connect with friends and the world around you on Connect Us.
          </span>
        </div>
        <div className="loginWrapperRight">
          <div className="loginWrapperRightContainer">
            <TextField
              id="email"
              label="Enter your e-mail"
              variant="outlined"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
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
            <FormControlLabel
              className="loginWrapperRightContainerRememberPassword"
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember password"
            />
            <button
              className="loginWrapperRightContainerLoginButton"
              onClick={handleLoginSubmit}
            >
              Log In
            </button>
            <span className="loginWrapperRightContainerForgotPassword">
              Forgot Password?
            </span>
            <button className="loginWrapperRightContainerRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
