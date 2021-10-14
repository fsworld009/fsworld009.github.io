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
          <div class="frame__scroll">
            <Nuxt class="frame__content" />
          </div>
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

.frame {
  display: flex;
  width: 100vw;
  /* can't use 100vh on mobile as toolbars are counted as viewport
   * instead use the window resize event to adjust document height on the fly,
   * see script tag below for details.
   * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/#css-custom-properties-the-trick-to-correct-sizing
   *
   * Possible alternative: https://github.com/razumnyak/vue-div-100vh
   * but not sure how does it play with Nuxt.js
   */
  // height: 100vh;
  height: 100%;
}

/**
 * Mobile:
 * On portrait: Always show bottom and hide left and right (Gameboy style)
 * On landscape: Show left and right and hide bottom (GBA Style). If the
 * screen width is smaller than @mobile_view_width, use Gameboy style instead.
 * Computers:
 * GBA style by default and use Gameboy style when browser width is smaller
 * than @mobile_view_width
 */

.frame__left {
  flex: 0 0 @frame_size_with_buttons;
  background-color: @frame_color;
  @media screen and (max-width: @mobile_view_width), (orientation: portrait) {
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
  flex-shrink: 0;
  flex-grow: 1;
  background-color: @frame_color;
  // Give it a very small height, and extend to the rest of the screen
  // height with flex-grow
  height: 1px;
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

.frame__scroll {
  margin-top: 16px;
  overflow-y: auto;
  height: 1px;
  flex-grow: 1;
}

.frame__content {
  height: 100%;
}

.frame__bottom {
  background-color: @frame_color;
  flex: 0 0 @frame_bottom_height;
  @media screen and (max-width: @mobile_view_width), (orientation: portrait) {
    flex-basis: @frame_size_with_buttons;
  }
}

.frame__vertical_container {
  height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: @mobile_view_width), (orientation: portrait) {
    display: none;
  }
}

.frame__horizontal_container {
  width: 100%;
  height: 100%;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: @mobile_view_width) {
    display: none;
  }
  @media (orientation: portrait) {
    display: flex;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import { onMounted, onBeforeUnmount, useRoute } from '@nuxtjs/composition-api';
import initController from '../assets/controller';
import useScore from '../store/score';
import { MOBILE_TOP_MARGIN_SIZE, isMobile } from '../assets/utils';

function onResize() {
  document.documentElement.style.height = `${window.innerHeight}px`;
  if (isMobile()) {
    document.documentElement.style.marginTop = `${MOBILE_TOP_MARGIN_SIZE}px`;
  }
}

export default Vue.extend({
  setup() {
    onMounted(() => {
      // This is only executed on client rendering
      const route = useRoute();
      initController(route);
      useScore();
      window.addEventListener('resize', onResize);
      onResize();
    });
    onBeforeUnmount(() => {
      // This is only executed on client rendering
      window.removeEventListener('resize', onResize);
    });
  },
});
</script>
