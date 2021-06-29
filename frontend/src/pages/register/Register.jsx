import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import {
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

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showReenteredPassword, setShowReenteredPassword] = useState(false);

  const {
    register,
    getValues,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  //Watch changes on password input field
  const password = watch("password", "");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowReenteredPassword = () => {
    setShowReenteredPassword(!showReenteredPassword);
  };

  const handleMouseDownReenteredPassword = (e) => {
    e.preventDefault();
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleRegisterSubmit = (data, e) => {
    //TODO -> Register New user - send Axios request to API
    e.preventDefault();
    console.log("Submitam podatke...");
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
          <form
            className="registerWrapperRightContainer"
            onSubmit={handleSubmit(handleRegisterSubmit)}
          >
            <TextField
              id="username"
              label="Enter your username"
              variant="outlined"
              {...register("username", {
                required: { value: true, message: "Username is required" },
                minLength: {
                  value: 3,
                  message: "Username must contains at least 3 characters.",
                },
                maxLength: {
                  value: 20,
                  message: "Username can contains max 50 characters.",
                },
              })}
            />
            {errors.username ? (
              <ErrorMessage
                name="username"
                errors={errors}
                render={({ message }) => (
                  <div className="registerWrapperRightContainerErrorMessage">
                    <ErrorOutlineOutlined />
                    <p>{message}</p>
                  </div>
                )}
              />
            ) : (
              getValues("username") && (
                <div className="registerWrapperRightContainerCorrectMessage">
                  <CheckCircleOutlineOutlined />
                  <p>Correct.</p>
                </div>
              )
            )}
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
                  <div className="registerWrapperRightContainerErrorMessage">
                    <ErrorOutlineOutlined />
                    <p>{message}</p>
                  </div>
                )}
              />
            ) : (
              getValues("email") && (
                <div className="registerWrapperRightContainerCorrectMessage">
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
            <FormControl variant="outlined">
              <InputLabel htmlFor="reenteredPassword">
                Re-enter your password
              </InputLabel>
              <OutlinedInput
                id="reenteredPassword"
                type={showReenteredPassword ? "text" : "password"}
                {...register("reenteredPassword", {
                  required: {
                    value: true,
                    message: "Re-entered password is required",
                  },
                  minLength: {
                    value: 6,
                    message:
                      "Re-entered password must contains at least 6 characters.",
                  },
                  validate: {
                    value: (value) =>
                      value === password ||
                      "Re-entered password doesn't match.",
                  },
                })}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowReenteredPassword}
                      onMouseDown={handleMouseDownReenteredPassword}
                      edge="end"
                    >
                      {showReenteredPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={170}
              />
              {errors.reenteredPassword ? (
                <ErrorMessage
                  name="reenteredPassword"
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
                getValues("reenteredPassword") && (
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
            <input
              type="submit"
              value="Sign Up"
              className="registerWrapperRightContainerRegisterButton"
            />

            <Link
              className="registerWrapperRightContainerLoginButton"
              to="/login"
            >
              Already have an Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
