<template>
<div>
  <p v-if='showInstall'>如果你喜欢的话，你可以将这个网页<span class='togglebtn' @click='install'>安装</span>到你的桌面。</p>
  <p v-if='showSubscription'> 同时，如果你愿意，也可以
    <span class='togglebtn' @click='subscribe'>订阅</span>
    本网站的通知。我不会滥用你给我的通知权限，所以网站的消息推送会非常克制，现阶段只会在我分享音乐时才会触发通知。
    推送的频率不会大于2次/月。谢谢你给的信任。
  </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['showInstall', 'showSubs'],
  computed: {
    showSubscription () {
      // chrome fcm is not reachable in mainland China
      let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
      return !isChrome && this.showSubs
    }
  },
  methods: {
    install () {
      // Show the prompt
      document.__pwaPrompt.prompt()
      // Wait for the user to respond to the prompt
      document.__pwaPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt')
          } else {
            console.log('User dismissed the A2HS prompt')
          }
          document.__pwaPrompt = null
        })
    },
    // Methods shamefully borrowed from https://serviceworke.rs/push-subscription-management_index_doc.html
    urlBase64ToUint8Array (base64String) {
      var padding = '='.repeat((4 - base64String.length % 4) % 4)
      var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/')

      var rawData = window.atob(base64)
      var outputArray = new Uint8Array(rawData.length)

      for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
      }
      return outputArray
    },
    subscribe () {
      let self = this
      navigator.serviceWorker.ready
        .then(function (reg) {
          return axios.get('/sw/vapidPublicKey')
            .then(function (response) {
              const vapidPublicKey = response.data

              const convertedVapidKey = self.urlBase64ToUint8Array(vapidPublicKey)
              return reg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: convertedVapidKey
              })
            })
        }).then(function (sub) {
          return axios.post('/sw/register', {
            subscription: sub
          }).then(function (res) {
            console.log('registered')
          })
        }).catch(function (e) {
          throw new Error('Failed to subscribe' + e)
        })
    },
    unsubscribe () {
      navigator.serviceWorker.ready
        .then(function (reg) {
          return reg.pushManager.getSubscription()
        }).then(function (sub) {
          return sub.unsubscribe()
            .then(function () {
              return fetch('/sw/unregister', {
                method: 'post',
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify({
                  subscription: sub
                })
              })
            })
        }).then(function () {
          console.log('will not receive notification')
        }).catch(function (e) {
          throw new Error('Failed to unsubscribe' + e)
        })
    }
  }
}
</script>

<style lang="stylus">
</style>
