<template>
  <div id="my-legal-info">
    <a rel="noopener" href="http://www.miitbeian.gov.cn/" target="_blank">浙ICP备 17015444号</a>
    <div style="width:300px;margin:0 auto; padding:5px 0;">
      <a rel="noopener" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33030202000658" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
        <img src="../assets/bei_an.png" style="float:left;" alt="公安备案"/>
        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">浙公网安备 33030202000658号</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-legal-info'
}
</script>

<style lang="stylus">

#my-legal-info
  width 100%
  margin 1em auto 0
  text-align center
  font-size 15px
  border-top solid gray 1px
  padding-top 5px

#my-legal-info
  a
    text-decoration none
    color gray

</style>
