<template>
  <div class="index">
    <div class="index__row">
      <img src="~assets/protrait.png" />
      <div class="index__title">Andy Lee (fsworld009)</div>
    </div>
    <div class="index__presskey">
      <a href="javascript:void()">Press Any Key</a>
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/variables.less';

.index {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.index__row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.index__title {
  margin-left: 8px;
  font-size: @text_size_title;
  color: @text_color_green;
  text-align: center;
}

.index__presskey {
  font-size: @text_size_header;
  animation: presskey 3s 1s infinite;
}

@keyframes presskey {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})


let a = 3;
</script>
