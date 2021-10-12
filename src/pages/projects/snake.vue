<!-- eslint-disable -->
<template>
  <ProjectPage :markdown="markdown" />
</template>

<script lang="js">
import Vue from 'vue';
import markdown from '../../project_markdowns/snake.md';

export default Vue.extend({
  data() {
    return {
      markdown,
    };
  },
});
</script>
