export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const FollowUser = (userId) => ({
  type: "FOLLOW_USER",
  payload: userId,
});

export const UnfollowUser = (userId) => ({
  type: "UNFOLLOW_USER",
  payload: userId,
});
