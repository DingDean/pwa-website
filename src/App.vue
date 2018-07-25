<template>
  <div id="app">
    <nav>
      <ul id='bottom-nav'>
        <li>
          <a rel='noopener' href='https://github.com/DingDean' target='_blank'>
            <img src="./assets/GitHub-Mark-32px.png" alt="github"/>
          </a>
        </li>
        <li>
          <a rel='noopener' href='https://www.douban.com/people/deanacroic/' target='_blank'>
            <img src="./assets/douban_32x32.png" alt="douban"/>
          </a>
        </li>
      </ul>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
html, body, h1, h2, h3, h4, h5, h6, p, ul
  padding 0
  margin 0
ul
  list-style-type none
a
  text-decoration none

body, html
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, "Helvetica Neue", Helvetica, "PingFang SC",
              "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  p
    font-size 14px
    line-height 22px
#app
  width 100%
  color #707070

#bottom-nav
  position absolute
  top 16px
  right 16px
  li
    float left
    margin-right 8px

</style>
