export default function swDev() {
    let swDev = `${process.env.PUBLIC_URL}/sw.js`;

    navigator.serviceWorker.register(swDev).then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration);
      })
    }