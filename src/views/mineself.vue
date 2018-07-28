<template>
<main class='main-grid'>
  <div class='grid-center' style='text-align: center; padding-top: 16px;'>
    <h1>Mineself</h1>
    <p> --- </p>
    <p><router-link to='/'>返回主页</router-link></p>
  </div>
  <transition appear name='slide-fade'>
    <div class='grid-center'>
      <h2>首先，我主要是一名后端工程师，在朝着全栈的方向努力。</h2>
      <img
      src="../assets/charts/total_edit_time_1390x436.png"
      alt="Total Editing Time Per Language"
      style='width: 100%'/>
      <p>
        从图中可以看到，业余时，我主要的编程语言依然是 JavaScript，更准确的说，应该是 NodeJS 。

        我喜欢用 NodeJS 开发网页应用，经常可以用非常快的速度折腾一些奇奇怪怪的项目。

        它和前端的紧密联系也减少了学习前端的开销。

        至于前端嘛，可以看见，我用的是 Vue。此前我也学习和生产环境下使用过 Angular 以及 React。大概当时我还处于程序员的初级阶段吧，用起来不是太得心应手。等沉淀了一段时间，我就遇见了 Vue，一见倾心。
      </p>
      <br>

      <p>
        虽然我自认也能用 Golang 从事后端开发，但上面的图表显然不支持我的说法。

        我最近一次集中的使用 Golang 还得追溯到去年。彼时我用 Golang 写了一个 Tmux 的插件 <a href="https://github.com/DingDean/tmux_pm25" target="_blank">tmux_pm25</a>。

        近来我又蠢蠢欲动得想用 Golang 写一个终端文字游戏了，就在这里立个 Flag 吧，看看到八月底(2018)能不能做出来。:D
      </p>
      <br>

      <p>图中也出现了 Java。好吧，我懂 Java，但我完全没有运用 Java 生态圈的工程能力。它之所以出现，是因为我想让手机上的网易云音乐能直接分享到我的这个网站来。一个非常笨的办法就是写一个中转的原生应用<a href="https://github.com/DingDean/shareMyMusic" target="_blank">shareMyMusic</a>。在shareMyMusic捕捉到网易云音乐分享的 Intent 后，将歌曲链接和名字通过 HTTP 再转发到我自己的网站后台。我感觉做安卓开发也挺有意思的，Kotlin 用起来也挺舒服，只能说 Android Studio 对它的支持太好了。</p>
    </div>
  </transition>
  <transition appear name='slide-fade'>
    <div class='grid-center' v-if='false'>
      <h3>在什么时段我最有效率？</h3>
    </div>
  </transition>
  <transition appear name='slide-fade'>
    <div class='grid-center'>
      <h2>其次，我自认是热爱编程的。</h2>
      <img
      src="../assets/charts/time_dist.png"
      alt="Time Distribution"
      style='width: 100%'/>
      <p> 在周中的时候，每天下班后大概还会有一个小时左右的实际编程时间。事实上，实际用于编程的时间是应该大于它的，因为我现在还没有找到一个有效的方法来统计我用于读资料和文档的时间。统计读文档的时间数据其实也是有意义的，可以用来衡量学习的效率。在未来，我希望能细化我自己的统计数据，不仅能区分哪些时间段是用于读资料的，哪些是用于实际编程的，还能找出时间段之间的逻辑关系。又立了个 Flag。:)</p>
      <br>
      <p>图中深蓝色的矩形代表周末日的编程时间。很自然的，周末的编程时间普遍比周中来得多。还记得我说过我周末早上都喜欢在星巴克写代码吗。从图中大致也可以看出每个周末日的编程时间都会有两个小时。这正好是一个早上的工作量。一般情况下，周末的下午和晚上都是我学习非编程相关知识的时间，当然也有个例，比如6月9-10号。那时候我大概正在写用于收集我自己编程足迹的项目。</p>
    </div>
  </transition>
  <transition appear name='slide-fade'>
    <div class='grid-center'>
      <h3>再看看谷歌记住了什么吧。</h3>
      <img
      src="../assets/charts/tech_search_ratio.png"
      alt="Ratio of Programming Related Search"
      style='width:100%'/>
      <p>
        前段时间发现谷歌可以让你下载自己账号的完整历史记录，包括浏览记录，搜索记录，位置信息等等。我很好奇谷歌记住了什么。
        上图展示了2013年到2018年5月之间，每年的搜索总数以及和编程相关的搜索所及比例。2015年是不是看着特别的突出，哈哈，那一年的上半年选修了6门500级的数学课程，每天都在和自己较劲，非常得开心。
        但这都不是重点，重点在于，我也是在2015年才正是开始了自己的编程道路。那年的下半年，因为数学相关的课程都修得差不多了，我便一次性选了很多计算机的课程。从那之后我就爱上了编程。下图大致上罗列了那么些年，我到底搜索了什么和编程相关的条目。
      </p>
      <img
      src="../assets/charts/google_search.png"
      alt="Google Search History"
      style='width:100%'/>
      <p>
        我当然要分析一下谷歌到底记住了什么。上图是我从搜索记录里找出的与编程有关的搜索条目。
      </p>
      <br>
      <p>毫不意外的，NodeJS 占了一大片区域。尽管NodeJS是从2015年才出现于搜索条目中，但很快它就霸榜了。果然问题是推动学习的一大动力啊。</p>
      <br>
      <p>
        一开始出乎我意料的其实是 C++ 居然占了这么大一片地方。因为我从不觉得我有很好的研究过 C++。后来再仔细得看了下图，发现 C++ 的搜索都集中于2015 和2017年。2015我选修了一门算法课程，而2017年，我则是在为公司里的遗留代码打补丁。至于其余时间的搜索，应该都是为了研究 NodeJS 的源码。
      </p>
      <br>
      <p>
        面积第三大的区域由 Vim 占领，可想而知我是个 Vimer 了。
        我是 2015 年开始使用 Vim 的，当时存粹是觉得挺酷的，而且也没有别人说得那么难上手。当肌肉形成记忆后，我就不想再换其他的编辑器或者 IDE 了。脱离了 IDE 之后，虽然说很多东西，比如调试和补完需要自己折腾一下，但一旦定型了，在 Vim 上的开发效率也是很高的。而且讲真，在使用了 Tmux 之后我就更离不开终端了。Tmux + Vim 的组合，简洁，有很少的干扰，还能随意的和别人 Pair Programming，美哉啊。
      </p>
      <br>
      <p>
        余下的面积里，其他各种编程语言占了一片，和后端紧密联系的 Golang, Java, Python, Haskell，当然还有前端的 HTML, CSS, Angular, React, Vue 以及 ThreeJS。

        Java 至今没有工程能力，Python 和 Haskell 都停留在了 TDD 初级阶段。Python 我主要用来学习机器学习:)。Haskell嘛，当初接触它是一个学长推荐我说数学系的学生应该都会喜欢 Haskell，因为会非常亲切。诚不我欺啊，很喜欢 Haskell，但事实上我现在也是勉强维持住 Haskell 的开发能力，希望以后找段时间，集中得写一个 Haskell 项目吧。Flag ++ :D
      </p>
    </div>
  </transition>
  <transition appear name='slide-fade'>
    <div class='grid-center'>
      <h3>谢谢你能看到这里，以后这个页面会不定期更新，欢迎偶尔回来瞥一眼。</h3>
    </div>
  </transition>
  <transition appear name='slide-fade'>
    <div class='grid-center' v-if='false'>
      <h3>我最近关心/折腾什么技术？</h3>
    </div>
  </transition>
  <div style='margin-bottom: 64px' class='grid-center'>
  </div>
</main>
</template>

<script>
export default {}
</script>

<style lang="stylus">
</style>
