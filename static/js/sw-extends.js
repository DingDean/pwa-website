/* global clients */
// part of service-worker.js
self.addEventListener('push', function (event) {
  let data = event.data.json()
  console.log(data)
  let title = data.title
  event.waitUntil(self.registration.showNotification(title, {
    body: data.body,
    actions: data.actions
  }))
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()

  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then(function (clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i]
      if (client.url === '/' && 'focus' in client) {
        return client.focus()
      }
    }
    if (clients.openWindow) {
      return clients.openWindow('/')
    }
  }))
})
