<template>
  <!-- workaround: generated index doesn't contain frame__content from layout -->
  <Title class="frame__content">
    <NuxtLink class="presskey" to="/menu">Press Any Button</NuxtLink>
  </Title>
</template>

<style lang="less">
@import '~/assets/variables.less';
.presskey {
  font-size: @text_size_header;
  animation: presskey 3s 1s infinite;
  display: block;
  text-align: center;
}

@keyframes presskey {
  0% {
    color: @text_color_white;
  }
  50% {
    color: @bg_color;
  }
  100% {
    color: @text_color_white;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import pageSetup from '../assets/pageSetup';

export default Vue.extend({
  setup() {
    pageSetup();
  },
});
</script>