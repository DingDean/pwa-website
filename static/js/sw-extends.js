// part of service-worker.js
self.addEventListener('push', function (event) {
  event.waitUntil(self.registration.showNotification('二向箔', {
    body: event.data.text() || 'no payload'
  }))
})
