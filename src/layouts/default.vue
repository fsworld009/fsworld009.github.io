<template>
  <div class="frame">
    <div class="frame__left">
      <div class="frame__vertical_container">
        <Dpad />
      </div>
    </div>
    <div class="frame__middle">
      <div class="frame__top"></div>
      <div class="frame__content_box">
        <div class="frame__content_border">
          <Score class="frame__score" />
          <Nuxt class="frame__content" />
        </div>
      </div>
      <div class="frame__bottom">
        <div class="frame__horizontal_container">
          <Dpad />
          <ControlButtons />
        </div>
      </div>
    </div>
    <div class="frame__right">
      <div class="frame__vertical_container">
        <ControlButtons />
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/variables.less';

@frame_color: #18c5cb;
@frame_size_with_buttons: 160px;
@frame_top_height: 16px;
@frame_bottom_height: 32px;

@frame_size_small: 5px;
@frame_content_min_width: 360px;

@mobile_max_width: @frame_size_with_buttons * 2 + @mobile_view_width;

.frame {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.frame__left {
  flex: 0 0 @frame_size_with_buttons;
  background-color: @frame_color;
  @media screen and (max-width: @mobile_max_width) {
    flex-basis: @frame_size_small;
  }
}

.frame__right {
  .frame__left();
}

.frame__middle {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100vh;
  min-width: @frame_content_min_width;
}

.frame__top {
  background-color: @frame_color;
  flex: 0 0 @frame_top_height;
}

.frame__content_box {
  flex: 0 1 100%;
  background-color: @frame_color;
}

.frame__content_border {
  height: 100%;
  background-color: @bg_color;
  border-radius: 16px;
  padding: 8px;
  display: flex;
  flex-direction: column;
}

.frame__score {
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: 8px;
}

.frame__content {
  flex-grow: 1;
}

.frame__bottom {
  background-color: @frame_color;
  flex: 0 0 @frame_bottom_height;
  @media screen and (max-width: @mobile_max_width) {
    flex-basis: @frame_size_with_buttons;
  }
}

.frame__vertical_container {
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: @mobile_max_width) {
    display: none;
  }
}

.frame__horizontal_container {
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: @mobile_max_width) {
    display: none;
  }
}
</style>
