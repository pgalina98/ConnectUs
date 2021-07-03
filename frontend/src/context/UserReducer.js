const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    case "FOLLOW_USER":
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };
    case "UNFOLLOW_USER":
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (userId) => userId !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default UserReducer;
