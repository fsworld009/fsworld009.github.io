<template>
  <div class="projects">
    <NuxtLink
      :to="`projects/${project.id}`"
      class="project"
      v-for="project in projectList"
      :key="project.id"
    >
      <div class="project__title">{{ project.title }}</div>
      <div class="project__date">{{ project.date }}</div>
      <div class="project__container">
        <img class="project__thumbnail" :src="`/screenshots/${project.id}/thumbnail.png`" />
        <div class="project__brief">{{ project.brief }}</div>
      </div>
      <div class="project__tags">
        <span class="project__tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      </div>
    </NuxtLink>
    <div class="projects__back">
      <Back />
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/variables.less';

.project {
  display: block;
  border-color: @text_color_white;
  margin-bottom: @spacing_large;
  padding: 12px;
}

.project__title {
  text-align: center;
  font-size: @text_size_header;
  color: @text_color_red;
  text-transform: uppercase;
}

.project__date {
  text-align: right;
  margin-top: @spacing_normal;
}

.project__container {
  margin-top: @spacing_normal;
  display: flex;
  align-items: center;
}

.project__thumbnail {
  max-width: 120px;
  object-fit: contain;
  margin-right: @spacing_small;
  margin-bottom: @spacing_small;
}

.project__brief {
  flex-grow: 1;
}

.project__tags {
  margin-top: @spacing_normal;
  text-align: left;
}

.project__tag {
  font-size: @text_size_small;
  margin-right: 8px;
  line-height: 24px;
  background-color: @text_color_green;
  color: @bg_color;
  padding: 4px;
  border-radius: 8px;
}

.projects__back {
  text-align: center;
}
</style>

<script lang="ts">
import Vue from 'vue';
import { ref } from '@nuxtjs/composition-api';
import projectListJson from '../../projects/index.json';

interface Project {
  id: string;
  title: string;
  brief: string;
  tags: string[];
  date: string;
}

export default Vue.extend({
  setup() {
    const projectList = ref(projectListJson as Project[]);
    return {
      projectList,
    };
  },
});
</script>
