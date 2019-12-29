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
          <a href="https://beta.observablehq.com/@dingdean" rel='noopener' target="_blank">
            <svg role="img" viewBox="0 0 32 32" aria-label="Observable" fill="currentColor" style="height: 32px; width: 32px; color: black;"><path transform='scale(1.3)' d="M12 21c-1.108 0-2.068-.261-2.88-.783a5.137 5.137 0 0 1-1.867-2.126 11.821 11.821 0 0 1-.952-2.847A16.523 16.523 0 0 1 6 12c0-.862.052-1.686.157-2.474.104-.787.297-1.587.578-2.399.281-.812.643-1.516 1.084-2.113a4.987 4.987 0 0 1 1.735-1.455C10.27 3.186 11.084 3 12 3c1.108 0 2.068.261 2.88.783a5.137 5.137 0 0 1 1.867 2.126c.434.895.751 1.844.952 2.847.2 1.002.301 2.084.301 3.244 0 .862-.052 1.686-.157 2.474a11.76 11.76 0 0 1-.59 2.399c-.29.812-.65 1.516-1.084 2.113-.434.597-1.008 1.082-1.723 1.455-.715.373-1.53.559-2.446.559zm2.118-6.882A2.888 2.888 0 0 0 15 12c0-.824-.287-1.53-.86-2.118C13.566 9.294 12.853 9 12 9c-.853 0-1.566.294-2.14.882A2.925 2.925 0 0 0 9 12c0 .824.287 1.53.86 2.118.574.588 1.287.882 2.14.882.853 0 1.559-.294 2.118-.882zM12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"></path></svg>
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
    <Legal/>
  </div>
</template>

<script>
import Legal from './components/legal.vue'
export default {
  components: {Legal}
}
</script>

<style lang="stylus">
:root
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, "Helvetica Neue", Helvetica, "PingFang SC",
              "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-size 0.875em
  line-height 1.7
  box-sizing border-box

*, ::before, ::after
  box-sizing inherit

html, body, h1, h2, h3, h4, h5, h6, p, ul
  padding 0
  margin 0
ul
  list-style-type none
a
  text-decoration none

#app
  width 100%
  color #707070

.main-grid
  display grid
  grid-template-columns 2fr 1fr 7fr 2fr
  grid-template-rows 16vh max-content
  grid-row-gap 16px

.grid-center
  grid-column 2 / 4

.grid-all
  grid-column 1 / 5

.togglebtn
  color #a0d911

.togglebtn:hover
  cursor pointer

.slide-fade-enter-active
  transition all .3s ease
.slide-fade-leave-active
  transition all .3s ease
.slide-fade-enter, .slide-fade-leave-to
  opacity 0
  transform translateY(10px)

.slide-left-right-enter-active
  transition all .8s ease
.slide-left-right-leave-active
  transition all .8s ease
.slide-left-right-enter
  opacity 0
  transform translateX(5px)
.slide-left-right-leave-to
  opacity 0
  transform translateX(-5px)

#bottom-nav
  position absolute
  top 16px
  right 16px
  li
    float left
    margin-right 8px

</style>
