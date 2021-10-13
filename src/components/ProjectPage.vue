<template>
  <div class="project">
    <h1 class="project__title">{{ project.title }}</h1>
    <p class="project__description">{{ project.description }}</p>
    <h2 class="project__header">ACHIEVEMENTS</h2>
    <ul class="project__achievements">
      <li v-for="(achi, index) in project.achievements" :key="index">
        {{ achi }}
      </li>
    </ul>
    <h2 v-if="project.screenshots.length" class="project__header">SCREENSHOTS</h2>
    <p v-for="(s, index) in project.screenshots" :key="index">
      <img
        class="project__screenshot"
        :src="`/screenshots/${id}/${String(index + 1).padStart(3, '0')}.png`"
        :alt="s"/>
      <br />
      {{ s }}
    </p>
    <h2 v-if="project.links.length" class="project__header">LINKS</h2>
    <h4 class="project__link_container" v-for="(l, index) in project.links" :key="index">
      <a class="project__link" :href="l.url" target="_blank">{{ l.name }}</a>
    </h4>
    <div class="project__back">
      <Back to="/projects" />
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/variables.less';

.project {
  text-align: center;
}

.project__description {
  margin-top: @spacing_large * 2;
  margin-bottom: @spacing_large * 2;
}

.project__screenshot {
  max-width: 100%;
  object-fit: contain;
  margin-top: 12px;
}

.project__achievements {
  text-align: left;
}

.project__link_container {
  margin-left: 18px;
  text-align: left;
}
.project__link {
  color: @text_color_blue;
  display: block;
}

.project__title {
  text-transform: uppercase;
  color: @text_color_red;
}

.project__header {
  text-transform: uppercase;
  color: @text_color_green;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    project: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
});
</script>
