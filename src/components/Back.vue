<template>
  <NuxtLink class="back" :to="to"><FaIcon icon="arrow-left" /> Back</NuxtLink>
</template>

<style lang="less">
@import '~/assets/variables.less';

.back {
  font-size: @text_size_large;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    to: {
      default: '/menu',
    },
  },
});
</script>
