export default {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
    didAutoLogout(state) {
      return state.didAutoLogout;
    },
      isauth(state)
      {
          return state.isauth;
      },
      autologin(state) {

        return state.dataapi;
      }

  };