<template>
<div>
  <div id='project-wrapper'>
    <ul class='project-nav'>
      <li v-for="(p, index) in projects" :key='p.title' @click="select(index)" :class='{active: index == currentIndex}'> {{p.title}} </li>
    </ul>

    <div class='project-main'>
      <div class='shell-bar'></div>
      <h3>{{ this.current.title }}</h3>
      <h4>{{ this.current.sub }}</h4>
      <br>
      <div v-html='this.current.content'> </div>
      <a class='shell-link' rel='noopener' :href='this.current.link' target='_blank'>
        GitHub
      </a>
    </div>
  </div>
</div>
</template>

<script>
const projects = [
  {title: 'tmux_pm25', sub: '在Tmux状态栏中显示PM2.5指数', link: 'https://github.com/DingDean/tmux_pm25', content: '<p>我的开发环境是典型的Tmux + Vim。</p> <p>所以我基本上“生活”在Tmux里。</p> <p>空气好的时候，我喜欢在编程之余去户外跑步。</p> <p>之前我获取空气质量的方法开销太大：</p> <p>找到手机，打开空气应用，滑动找到空气质量。</p> <p>不仅步骤多，同时分散注意力的风险也大。</p> <p>现在这个小插件让我瞥一眼就能获取信息。</p> <p>如果空气质量不好，我可以马上回到编程的状态。</p> '},
  {title: 'Mineself', sub: '记录和分析电子足迹', link: 'https://github.com/DingDean/Mineself', content: '<p>在这个时代，每个人多少都可以被其数字足迹所描述。</p> <p>听了多少音乐，买了多少书籍，每份足迹都描述一个人的某个位面。</p> <p>这个项目受wakatime启发，试图记录自己的编程足迹，从而定量的回答一些问题：</p> <p>经常使用的编程语言有哪些？</p> <p>每天有多少时间用于编程？</p> <p>什么时间段编程最有效率？</p> <p>喜欢使用哪些技术？</p> <p>……</p> <p>希望数据能成为一面镜子，呈现一个真实的自我。</p>'}
]

export default {
  data () {
    return {
      currentIndex: 0,
      current: projects[0],
      projects
    }
  },
  methods: {
    select (index) {
      if (!this.projects[index]) {
        return
      }
      this.currentIndex = index
      this.current = this.projects[index]
    }
  }
}
</script>

<style scoped lang="stylus">
#project-wrapper
  display grid
  grid-template-columns 2fr 1fr 1fr 1fr 1fr 14fr 4fr
  grid-column-gap 8px
.project-nav
  grid-column 3 / 5
  font-size 12px
  line-height 18px
  text-align center
  margin-top 16px
  li:hover
    color #a0d911
    cursor pointer
.project-main
  grid-column 5 / 7
.active
  color #a0d911
.shell-bar
  width 200px
  border-style solid
  border-width 1px

@media(max-width: 760px)
  .project-nav
    grid-column 2 / 5
    text-align right

@media(max-width: 460px)
  .project-nav
    grid-column 1 / 5
    text-align right
</style>
