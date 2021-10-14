<template>
  <div class="dpad">
    <div class="dpad__left button-LEFT"></div>
    <div class="dpad__right button-RIGHT"></div>
    <div class="dpad__up button-UP"></div>
    <div class="dpad__down button-DOWN"></div>
    <div class="dpad__middle"></div>
  </div>
</template>

<style lang="less">
@dpad_width: 48px;
@dpad_height: 32px;
@dpad_adjacent_length: @dpad_width + (@dpad_height / 2);
@button_color: white;

.dpad {
  width: @dpad_adjacent_length * 2;
  height: @dpad_adjacent_length * 2;
  position: relative;
}

.dpad__left {
  width: @dpad_adjacent_length;
  height: @dpad_height;
  background-color: @button_color;
  position: absolute;
  top: @dpad_width;
  &:hover {
    cursor: pointer;
  }
  z-index: 1;
}

.dpad__right {
  .dpad__left();
  left: @dpad_adjacent_length;
}

.dpad__up {
  width: @dpad_height;
  height: @dpad_adjacent_length;
  left: @dpad_width;
  background-color: @button_color;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
  z-index: 1;
}

.dpad__down {
  .dpad__up();
  top: @dpad_adjacent_length;
}

.dpad__middle {
  position: absolute;
  background-color: @button_color;
  width: @dpad_height;
  height: @dpad_height;
  left: @dpad_width;
  top: @dpad_width;
  z-index: 2;
}
</style>
