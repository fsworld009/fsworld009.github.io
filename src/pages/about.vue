<template>
  <div class="about">
    <div class="about__headline">
      Software Developer, Gamer, Master of Science in Computer Science, Taiwanese
    </div>
    <div class="about__content">
      <!-- eslint-disable -->
      <p>
        I am a software developer specialized in web application development.
      </p>
      <p>
        I received my master degree in Texas, United States in 2014, and
        have been working as a professional software developer since 2015.
      </p>
      <p>
        In my free time, I like to play video games, mostly console games,
        do hobby programming, or watch programming and gaming related
        contents on Youtube or Twitch.tv.
      </p>
      <p>I am currently living in Taipei area, Taiwan.</p>
      <!-- eslint-enable -->
    </div>
    <div class="about__back">
      <Back />
    </div>
  </div>
</template>

<style lang="less">
@import '~/assets/variables.less';
.about {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.about__headline {
  font-size: @text_size_large;
  color: @text_color_blue;
}
</style>
