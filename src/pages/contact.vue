<template>
  <div class="contact">
    <div class="contact__links">
      <a class="contact__link" href="mailto:fsworld009@gmail.com">
        <FaIcon icon="envelope" /> Email
      </a>
      <a class="contact__link" href="https://github.com/fsworld009" target="_blank">
        <FaIcon icon="github" /> GitHub
      </a>
      <a class="contact__link" href="https://twitter.com/fsworld009" target="_blank">
        <FaIcon icon="twitter" /> Twitter
      </a>
    </div>
    <Back class="contact__back" />
  </div>
</template>

<style lang="less">
@import '~/assets/variables.less';

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.contact__links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.contact__link {
  margin-top: 12px;
  font-size: @text_size_normal;
  width: @text_size_normal * 11;
}

.contact__back {
  margin-top: 24;
}
</style>
