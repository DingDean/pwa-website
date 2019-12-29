<template>
<div class='music-tweet'>
  <p>{{text}}</p>
  <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 :src='linkLg' class='player-large'></iframe>
  <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=278 height=52 :src='linkSm' class='player-small'></iframe>
  <p>{{ts}}</p>
</div>
</template>

<script>
export default {
  props: ['text', 'id', 'time'],
  computed: {
    linkLg () {
      return `//music.163.com/outchain/player?type=2&id=${this.id}&auto=0&height=66`
    },
    linkSm () {
      return `//music.163.com/outchain/player?type=2&id=${this.id}&auto=0&height=32`
    },
    ts () {
      let date = new Date(this.time)
      return date.toLocaleString()
    }
  }
}
</script>

<style lang="stylus">
.music-tweet
  p
    font-size 0.8em
  border-left-style solid
  border-left-width 1px

.player-large
  display block

.player-small
  display none

@media(max-width: 760px)
  .player-large
    display none
  .player-small
    display block
</style>
