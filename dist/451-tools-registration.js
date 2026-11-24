(function (window) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      const serviceWorkerUrl = `/451-tools.js?configuration=${encodeURIComponent(
        '/451-tools-configuration.json?v=db6cce0daa87e75a242820ef972f46b0'
      )}`;

      navigator.serviceWorker
        .register(serviceWorkerUrl)
        .then(function (registration) {
          return registration.update();
        })
        .catch(function (error) {
          return console.log('Service worker registration failed:', error);
        });
    });
  }
})(window);
