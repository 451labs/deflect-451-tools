(function (window) {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      const serviceWorkerUrl = `/451-tools.js?configuration=${encodeURIComponent(
        '/451-tools-configuration.json?v=943ede194fe20fe5463e2838795eff32'
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
