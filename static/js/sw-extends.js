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

  clients.openWindow(`/`)
})
