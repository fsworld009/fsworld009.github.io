<template>
  <Title>
    <div class="menu">
      <NuxtLink to="/about">About Me</NuxtLink>
      <NuxtLink to="/projects/sample">Projects</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <a href="/blog/" target="_blank">Blog</a>
    </div>
  </Title>
</template>

<style lang="less">
@import '~/assets/variables.less';

.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > a {
    width: @text_size_header * 9;
    font-size: @text_size_header;
  }
}
</style>
