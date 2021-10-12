<template>
  <div class="title">
    <div class="title__row">
      <img src="~assets/protrait.png" />
      <div class="title__text">Andy Lee (fsworld009)</div>
    </div>
    <div class="title__slot">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/variables.less';

.title {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.title__row {
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: @mobile_view_width) {
    // allow title text to be wrapped in mobile view
    flex-wrap: wrap;
  }
}

.title__text {
  margin-left: 8px;
  font-size: @text_size_title;
  color: @text_color_green;
  flex-shrink: 1;
  flex-grow: 1;
  text-align: center;
}
</style>
