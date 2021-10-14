import { defineStore } from 'pinia';
import Vue from 'vue';
import { ComputedRef } from '@vue/composition-api/dist/vue-composition-api.d';
import { Route } from 'vue-router/types/router.d';

interface ScoreState {
  viewedPages: Record<string, boolean>;
}

export default defineStore('score', {
  state: (): ScoreState => ({
    viewedPages: {},
  }),
  getters: {
    // update later
    score: (state) => {
      let score = 0;
      Object.keys(state.viewedPages).forEach((path) => {
        if (/projects\/[a-z0-9_-]+/.exec(path)) {
          score += 10000;
        } else {
          score += 5000;
        }
      });
      return score;
    },
  },

  actions: {
    viewPage(route: ComputedRef<Route>) {
      Vue.set(this.viewedPages, route.value.path, true);
    },
  },
});
