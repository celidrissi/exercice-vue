import Vue from "vue";
import Vuex from "vuex";
import tasks from "./tasks";// Importer votre module ici et l'ajouter au Store (ligne 19)
import VueCompositionApi from "@vue/composition-api";

Vue.use(Vuex);
Vue.use(VueCompositionApi);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tasks // Votre module ici (mettre une virgule à la fin de la ligne 18)
    },
    
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  Store.subscribe((mutation, state) => {
    localStorage.setItem('dishes', JSON.stringify(state.tasks.dishes));
  });

  return Store;
}
