import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      msalConfig: {
        auth: {
          clientId: "5df871bf-b684-4af2-9c55-8e3a92f47413",
          authority:
            "https://login.microsoftonline.com/ef3eb1cd-5550-4a20-826d-c28c0482b7ab",
        },
        cache: {
          cacheLocation: "localStorage",
        },
      },
      accessToken: "",
    };
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    },
  },
});

export default store;
