<template>
  <div class="control-buttons">
    <div class="control-buttons__container">
      <div class="control-buttons__a button-A"></div>
      <div class="control-buttons__b button-B"></div>
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/variables.less';

@button_radius: 48px;
@button_text_size: 16px;

.control-buttons {
  width: 128px;
  height: 128px;
}

.control-buttons__container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.control-buttons__base {
  flex: 0 0 @button_radius;
  background-color: white;
  height: @button_radius;
  border-radius: 50%;
  font-family: 'Press Start';
  text-align: center;
  line-height: @button_radius;
  font-size: @button_text_size;
  color: @bg_color;
  &:hover {
    cursor: pointer;
  }
}

.control-buttons__a {
  .control-buttons__base();
  order: 2;
  margin-left: 16px;
  margin-bottom: 32px;
  &::after {
    content: 'A';
  }
}

.control-buttons__b {
  .control-buttons__base();
  order: 1;
  &::after {
    content: 'B';
  }
}
</style>
