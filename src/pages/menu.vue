<template>
  <Title>
    <div class="menu">
      <NuxtLink to="/about">About Me</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </Title>
</template>

<style lang="less">
.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > a {
    width: 160px;
  }
}
</style>