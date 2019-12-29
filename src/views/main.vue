<template>
  <main class='main-grid'>
    <div class='grid-center'></div>
    <header class='grid-center' id='welcome-msg'>
      <transition appear name='slide-left-right' mode='out-in'>
        <div @click="toggle('mainHeader')" v-if='isShown.mainHeader' key='default' class='laminated' >
          <h1>哦，嘿，你来了</h1>
          <h1>倍感荣幸</h1>
          <h1>我叫丁科</h1>
          <h1>欢迎来到我的二向箔</h1>
        </div>
        <div @click="toggle('mainHeader')" v-if="!isShown.mainHeader" key='hidden' class='laminated'>
          <h1>弹星者与二向箔</h1>
          <p>音乐，终端与命令行。</p>
          <p>平日的生活简单如斯。</p>
          <p>在一个喧嚣的都市，却活在一个容器里。</p>
          <p>这容器是自我，是象牙塔。</p>
          <p>难以分享，难以自察。</p>
          <p>挣扎于内心，却外示以冷静。</p>
          <p>在每日的独行中，笑过，怒过，哭过，之后重头来过。</p>
          <p>无意或有意，自己正在二维化。</p>
          <p>所以每天唯有音乐，终端与命令行。</p>
          <p>现实塌陷在网络，然投影却比真身更加代表自己。</p>
          <p>我是我自己的弹星者，向宇宙广播着我的存在。</p>
          <p>这是我力所能及的尝试。</p>
          <p>我将我自己掷入二向箔。</p>
          <p>所以，你好，歌者，再次欢迎你来到我的这片水塘。</p>
        </div>
      </transition>
    </header>

    <transition name='slide-fade' appear>
      <div class='grid-center' id='contact-info'>
        <p>请让我<span class="togglebtn" @click="toggle('info')">介绍下自己</span>吧。</p>
        <p>或者，你也可以直接给我发邮件: me@dingkewz.com</p>
        <p>再或者，让我请你喝杯咖啡吧！</p>
        <p>不出意外，我周末的早晨(9点到11点半)会在
          <a
            rel='noopener'
            target='_blank'
            href='http://map.baidu.com/?newmap=1&s=inf%26uid%3Db343657433ec89504354d775%26wd%3D%E5%8F%8C%E5%9F%8E%E5%9B%BD%E9%99%85+%E6%98%9F%E5%B7%B4%E5%85%8B%26all%3D1%26c%3D179&from=alamap&tpl=mapdots'>
            这个星巴克
          </a>
          喝咖啡，写代码。
        </p>
        <p>如果你正好也在附近，我很乐意用一杯咖啡与你聊聊，无论聊什么！</p>
        <p>期待遇见你！</p>
      </div>
    </transition>

    <transition name='slide-fade' appear>
      <div v-if='isShown.info' class='grid-center' id='programmer'>
        <p>我是一名后端工程师，擅长使用NodeJS。我以编程为生，也以编程为乐。
          我有这么一些<span class='togglebtn' @click="toggle('projects')">小项目</span>，你或许会觉得有用。
        </p>
        <p>我相信数据能客观得表述一个人，为此我收集了自己的数字足迹，用来定量得认识自己。</p>
        <p>如果你感兴趣的话，你可以跳转到 <span class='togglebtn' @click='toMineself'>Mineself</span>。这个页面现在暂时只有自己的编程数据和谷歌搜索数据。</p>
        <p>同时呢，我发现 Observable 是个好平台，能用它方便的使用任何你能想到的工具来分析，可视化数据。我还在数据可视化的初级道路上，欢迎一起学习，如果能给我些指点那就更棒了！这是我的
          <a
            rel='noopener'
            target='_blank'
            href='https://beta.observablehq.com/@dingdean'>
            Observable 主页
          </a>。
        </p>
      </div>
    </transition>
    <transition name='slide-fade'>
      <project v-if="isShown.projects" class='grid-all' id='projects'/>
    </transition>

    <transition name='slide-fade' appear>
      <div v-if='isShown.info'class='grid-center' id='writter'>
        <p>我平时也会写一些文章，它们大部分都被收录于我的
          <a rel='noopener' target='_blank' href='https://blog.dingkewz.com'>静态博客</a>
          之中。
        </p>
      </div>
    </transition>

    <transition name='slide-fade' appear>
      <div v-if='isShown.info' class='grid-center' id='athlete'>
        <p>在编程和写作之余，我喜欢运动。
          <!-- 我擅长<span class='togglebtn'>长跑</span>，也擅长<span class='togglebtn'>网球</span>。 -->
          我擅长<span class=''>长跑</span>，也擅长<span class=''>网球</span>。
          最近正在尝试去健身房练器械。
        </p>
      </div>
    </transition>

    <transition name='slide-fade' appear>
      <div v-if='isShown.info'class='grid-center' id='musicoholic'>
        <p> 我非常喜欢<span class='togglebtn' @click="toggle('music')">听音乐</span>，以至于耳机不离身，大概是一个人太久了吧，哈哈哈。我欧美的歌曲听得比较多，最近迷上了在油管上听各种电子remix，有毒。 </p>
      </div>
    </transition>
    <transition name='slide-fade' appear>
      <music v-if="isShown.music" class='grid-all' id='music'/>
    </transition>

    <transition name='slide-fade' appear>
      <div v-if='isShown.info'class='grid-center' id='bookworm'>
        <p>买书和看书也是我的一大爱好，除了专业书籍，我喜欢买科幻小说。你大概也发现了，我非常喜欢《三体》，它是我的最爱。除此之外，《沙丘》是我最喜欢的外国科幻小说。这是我的<a rel='noopener' href='https://www.douban.com/people/deanacroic/' target='_blank'>豆瓣</a>，欢迎随时向我推荐好看的书籍。</p>
      </div>
    </transition>

    <transition name='slide-fade' appear>
      <div v-if='isShown.info'class='grid-center' id='thankyou'>
        <p><span class=''>谢谢</span>你能看到这里。</p>
      </div>
    </transition>
    <transition name='slide-fade' appear>
      <sw
        v-if='isShown.info'
        :showInstall='isShown.install'
        :showSubs='isShown.subscribe'
        class='grid-center'/>
    </transition>
    <div style='margin-bottom: 64px' class='grid-center'>
    </div>
  </main>

</template>

<script>
export default {
  data () {
    return {
      isShown: {
        mainHeader: true,
        info: this.showInfo === '0' || false,
        projects: this.showProjects === '0' || false,
        music: this.showMusic === '0' || false,
        install: false,
        subscribe: false
      }
    }
  },
  props: ['showInfo', 'showMusic', 'showProjects'],
  components: {
    project: () => import('../components/projects.vue'),
    music: () => import('../components/musics.vue'),
    sw: () => import('../components/sw.vue')
  },
  methods: {
    toggle (target) {
      if (!this.isShown.hasOwnProperty(target)) {
        return
      }
      this.isShown[target] = !this.isShown[target]
      if (target === 'info') {
        this.isShown.install = this.isShown.info && document.__pwaPrompt
        this.isShown.subscribe = this.isShown.info && document.__subsPrompt
        this.isShown.projects = this.isShown.info && this.isShown.projects
        this.isShown.music = this.isShown.info && this.isShown.music
      }
    },
    toMineself () {
      this.$router.push('/mineself')
    }
  }

}
</script>

<style lang="stylus">
.main-grid
  min-height 980px

#welcome-msg
  text-align center
  @media(min-width: 300px) {
    font-size .6em
  }
  @media(min-width: 700px) {
    font-size 1em
  }
  @media(min-width: 1024px) {
    text-align left
  }
.laminated:hover
  cursor pointer
</style>
