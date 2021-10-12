<template>
  <Title>
    <div class="menu">
      <NuxtLink to="/about"><FaIcon icon="question-circle" /> About Me</NuxtLink>
      <NuxtLink to="/projects/sample"><FaIcon icon="rocket" /> Projects</NuxtLink>
      <NuxtLink to="/contact"><FaIcon icon="address-book-o" /> Contact</NuxtLink>
      <a href="https://fsworld009.github.io/blog/" target="_blank">
        <FaIcon icon="pencil-square-o" /> Blog
      </a>
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
    width: @text_size_header * 11;
    font-size: @text_size_header;
  }
}
</style>
