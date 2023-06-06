import { createStore } from "vuex";

// Modules:
import journal from "../modules/daybook/store/journal";
import auth from "../modules/auth/store";

const store = createStore({
  modules: {
    auth,
    journal
  }
});

export default store;