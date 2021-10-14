<!-- eslint-disable -->
<template>
  <ProjectPage :project="project" id="##PROJECT_ID##" />
</template>

<!-- use js to prevent from ts compile error -->
<script lang="js">
import Vue from 'vue';
import { ref } from '@nuxtjs/composition-api';
import pageSetup from '../../assets/pageSetup';
import project from '../../projects/##PROJECT_ID##.json';

export default Vue.extend({
  setup() {
    pageSetup();
    return {
      project: ref(project),
    };
  },
});
</script>
