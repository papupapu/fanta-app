const Reducer = async (state, {type, payload}) => {
  switch (type) {
    case 'auth':
      return {
        ...state,
        user: {
          name: payload.username,
          id: payload._id,
          email: payload.email,
          isAuth: true,
        },
      };
    default:
      return state;
  }
};

export default Reducer;
