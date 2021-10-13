<!-- eslint-disable -->
<template>
  <ProjectPage :markdown="markdown" />
</template>

<script lang="js">
import Vue from 'vue';
import markdown from '../../projects/$PROJECT_ID.md';

export default Vue.extend({
  data() {
    return {
      markdown,
    };
  },
});
</script>
