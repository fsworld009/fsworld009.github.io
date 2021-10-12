<template>
  <Title>
    <div class="presskey">
      <NuxtLink to="/menu">Press Any Key</NuxtLink>
    </div>
  </Title>
</template>

<style lang="less">
@import '~/assets/variables.less';
.presskey {
  font-size: @text_size_header;
  animation: presskey 3s 1s infinite;
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
import Vue from 'vue'

export default Vue.extend({})


let a = 3;
</script>
