import { InjectionKey } from "vue";
import { createStore, useStore, Store } from "vuex";

export interface State {
  name: string;
  token: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state: {
    name: "",
    token: "",
  },
});
