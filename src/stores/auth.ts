import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { useAuth0 } from "@auth0/auth0-vue";

export interface State {
  logged: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state: {
    logged: false,
  },
  getters: {
    isLogged: (state): boolean => {
      const { isAuthenticated } = useAuth0();
      state.logged = isAuthenticated.value;
      return state.logged;
    },
  },
});
