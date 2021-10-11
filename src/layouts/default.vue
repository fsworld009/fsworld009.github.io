<template>
  <div class="frame">
    <div class="frame__left">
      <div class="frame__vertical-container">
        <Dpad />
      </div>
    </div>
    <div class="frame__middle">
      <div class="frame__top"></div>
      <div class="frame__content_container"><Nuxt class="frame__content"/></div>
      <div class="frame__bottom">
        <div class="frame__horizontal-container">
          <Dpad />
          <ControlButtons />
        </div>
      </div>
    </div>
    <div class="frame__right">
      <div class="frame__vertical-container">
        <ControlButtons />
      </div>
    </div>
  </div>
</template>

<style lang="less">
@frame_color: #18c5cb;
@frame_size_with_buttons: 160px;
@frame_top_height: 16px;
@frame_bottom_height: 32px;

@frame_size_small: 5px;

@mobile_max_width: 980px;

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
}

.frame__top {
  background-color: @frame_color;
  flex: 0 0 @frame_top_height;
}

.frame__content_container {
  flex-grow: 1;
  background-color: @frame_color;
}

.frame__content {
  min-height: 100% !important; // important is required to override nuxt default
  border-radius: 16px;
  padding: 8px !important;
}

.frame__bottom {
  background-color: @frame_color;
  flex: 0 0 @frame_bottom_height;
  @media screen and (max-width: @mobile_max_width) {
    flex-basis: @frame_size_with_buttons;
  }
}

.frame__vertical-container {
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

.frame__horizontal-container {
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
