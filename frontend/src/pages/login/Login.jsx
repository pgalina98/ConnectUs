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
import {
  Visibility,
  VisibilityOff,
  CheckCircleOutlineOutlined,
  ErrorOutlineOutlined,
} from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLoginSubmit = (data) => {
    //TODO -> Check user data - send Axios request to API
    console.log("Submited data e-mail: " + data.email);
    console.log("Submited data password: " + data.password);
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginWrapperLeft">
          <h3 className="loginWrapperLeftLogo">Connect Us</h3>
          <span className="loginWrapperLeftDescription">
            Connect with friends and the world around you on Connect Us.
          </span>
        </div>
        <div className="loginWrapperRight">
          <form
            className="loginWrapperRightContainer"
            onSubmit={handleSubmit(handleLoginSubmit)}
          >
            <TextField
              id="email"
              label="Enter your e-mail"
              variant="outlined"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail address format is invalid.",
                },
                maxLength: {
                  value: 50,
                  message: "E-mail address can contains max 50 characters.",
                },
              })}
            />
            {errors.email ? (
              <ErrorMessage
                name="email"
                errors={errors}
                render={({ message }) => (
                  <div className="loginWrapperRightContainerErrorMessage">
                    <ErrorOutlineOutlined />
                    <p>{message}</p>
                  </div>
                )}
              />
            ) : (
              getValues("email") && (
                <div className="loginWrapperRightContainerCorrectMessage">
                  <CheckCircleOutlineOutlined />
                  <p>Correct.</p>
                </div>
              )
            )}

            <FormControl variant="outlined">
              <InputLabel htmlFor="password">Enter your password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 6,
                    message: "Password must contains at least 6 characters.",
                  },
                })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={150}
              />
              {errors.password ? (
                <ErrorMessage
                  name="password"
                  errors={errors}
                  render={({ message }) => (
                    <div
                      className="loginWrapperRightContainerErrorMessage 
                                 loginWrapperRightContainerAddMarginToMessage"
                    >
                      <ErrorOutlineOutlined />
                      <p>{message}</p>
                    </div>
                  )}
                />
              ) : (
                getValues("password") && (
                  <div
                    className="loginWrapperRightContainerCorrectMessage 
                               loginWrapperRightContainerAddMarginToMessage"
                  >
                    <CheckCircleOutlineOutlined />
                    <p>Correct.</p>
                  </div>
                )
              )}
            </FormControl>
            <FormControlLabel
              className="loginWrapperRightContainerRememberPassword"
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember password"
            />
            <input
              type="submit"
              value="Log In"
              className="loginWrapperRightContainerLoginButton"
            />
            <span className="loginWrapperRightContainerForgotPassword">
              Forgot Password?
            </span>
            <button className="loginWrapperRightContainerRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
