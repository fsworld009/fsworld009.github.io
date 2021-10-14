<template>
  <div class="score">SCORE: {{ score }}</div>
</template>

<style lang="less">
.score {
  text-align: center;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { computed } from '@nuxtjs/composition-api';
import useScore from '../store/score';

export default Vue.extend({
  setup() {
    const scoreStore = useScore();
    useScore();
    return {
      score: computed(() => String(scoreStore.score).padStart(8, '0')),
    };
  },
});
</script>
