<template>
<ul class='musics-wrapper'>
  <li v-for='music in musics' class='music-wrapper' :key='music.ts'>
    <Music :text='music.text' :id='music.id' :time='music.ts'/>
  </li>
</ul>
</template>

<script>
import Music from './music.vue'
import axios from 'axios'
export default {
  data () {
    return {
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
      axios.get('/sw/musicList')
        .then(function (res) {
          self.musics = res.data
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
  height 260px
  overflow scroll
.music-wrapper
  grid-column 5 / 7
  @media(max-width: 760px)
    grid-column 4 / 7
  @media(max-width: 460px)
    grid-column 3 / 8
</style>
