import { defineStore } from 'pinia';
import { ComputedRef } from '@vue/composition-api/dist/vue-composition-api.d';
import { Route } from 'vue-router/types/router.d';

interface ScoreState {
  score: number;
  viewedPages: Record<string, boolean>;
}

export default defineStore('score', {
  state: (): ScoreState => ({
    score: 0,
    viewedPages: {},
  }),
  getters: {
    // update later
    getScore: (state) => state.score + 100,
  },

  actions: {
    viewPage(route: ComputedRef<Route>) {
      this.viewedPages[route.value.path] = true;
      console.log('action called', this.viewedPages);
    },
  },
});
