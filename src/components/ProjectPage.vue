<template>
  <div class="project">
    <div class="project__content" v-html="markdown"></div>
    <div class="project__back">
      <Back to="/projects" />
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/variables.less';

.project__content {
  text-align: center;
}

.project__back {
  text-align: center;
}

.project {
  img {
    max-width: 100%;
    object-fit: contain;
    margin-top: 12px;
  }

  ul,
  ol {
    text-align: left;
  }

  h4 {
    margin-left: 18px;
    text-align: left;
    a {
      color: @text_color_blue;
    }
  }

  h1 {
    text-transform: uppercase;
    color: @text_color_red;
  }

  h2 {
    text-transform: uppercase;
    color: @text_color_green;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    markdown: {
      type: String,
      required: true,
    },
  },
});
</script>
