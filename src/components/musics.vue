<template>
<ul class='musics-wrapper'>
  <li v-for='music in musics' class='music-wrapper' :key='music.ts'>
    <Music :text='music.text' :id='music.id' :time='music.ts'/>
  </li>
  <li class='music-wrapper' @click='fetchMusics'> {{loadText}} </li>
</ul>
</template>

<script>
import Music from './music.vue'
import axios from 'axios'
export default {
  data () {
    return {
      loadText: '加载更多',
      page: 0,
      musics: []
    }
  },
  mounted () {
    this.fetchMusics()
  },
  props: ['show'],
  components: {
    Music
  },
  methods: {
    fetchMusics () {
      let self = this
      axios.get(`/sw/musicList/${self.page}`)
        .then(function (res) {
          let {isMore, list} = res.data
          if (res.data.length !== 0) {
            self.musics.push(...list)
            self.page++
          }
          if (!isMore) {
            self.loadText = '没有更多了'
          }
        }).catch(function (e) {
          console.error(e)
        })
    }
  }
}
</script>

<style lang="stylus">
.musics-wrapper
  display grid
  grid-template-columns 2fr 1fr 1fr 1fr 1fr 14fr 4fr
  grid-row-gap 16px
  height 300px
  overflow scroll
.music-wrapper
  grid-column 5 / 7
  @media(max-width: 760px)
    grid-column 4 / 7
  @media(max-width: 460px)
    grid-column 3 / 8
</style>
