<!-- eslint-disable -->
<template>
  <ProjectPage :project="project" id="##PROJECT_ID##" />
</template>

<script lang="js">
import Vue from 'vue';
import project from '../../projects/##PROJECT_ID##.json';

export default Vue.extend({
  data() {
    return {
      project,
    };
  },
});
</script>
