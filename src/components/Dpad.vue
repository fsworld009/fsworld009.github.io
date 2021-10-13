<template>
  <div class="dpad">
    <div class="dpad__left button-LEFT"></div>
    <div class="dpad__right button-RIGHT"></div>
    <div class="dpad__up button-UP"></div>
    <div class="dpad__down button-DOWN"></div>
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
  top: @dpad_adjacent_length - (@dpad_height / 2);
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
}

.dpad__down {
  .dpad__up();
  top: @dpad_adjacent_length;
}
</style>
