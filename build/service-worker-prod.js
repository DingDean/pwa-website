(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors.
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );

  function registerSW () {
    navigator.serviceWorker.register('service_worker.js')
      .then(function(registration) {
        // updatefound is fired if service-worker.js changes.
        registration.onupdatefound = function() {
          // updatefound is also fired the very first time the SW is installed,
          // and there's no need to prompt for a reload at that point.
          // So check here to see if the page is already controlled,
          // i.e. whether there's an existing service worker.
          if (navigator.serviceWorker.controller) {
            // The updatefound event implies that registration.installing is set
            var installingWorker = registration.installing;

            installingWorker.onstatechange = function() {
              switch (installingWorker.state) {
                case 'installed':
                  // At this point, the old content will have been purged and the
                  // fresh content will have been added to the cache.
                  // It's the perfect time to display a "New content is
                  // available; please refresh." message in the page's interface.
                  break;

                case 'redundant':
                  throw new Error('The installing ' +
                    'service worker became redundant.');

                default:
                  // Ignore
              }
            };
          }
        };
      }).catch(function(e) {
        console.error('Error during service worker registration:', e);
      });
  }

  function checkSubscription () {
    navigator.serviceWorker.ready
      .then(function (reg) {
        console.log('service worker registered')
        return reg.pushManager.getSubscription()
      }).then(function (subs) {
        if (subs) {
          console.log('already subscribed')
          document.__subsPrompt = false
        } else {
          console.log('not yet subscribed')
          document.__subsPrompt = true
        }
      })
  }

  window.addEventListener('load', function() {
    if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {

      registerSW()
      checkSubscription()
    }
  });

  // for chrome later than 67, it's mandatory to prompt user to install the app by ourself
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault()
    document.__pwaPrompt = e
    console.log('pwa prompt is saved')
  })
})();
