import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  const getGDPR = localStorage.getItem('GDPR:accepted');
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-ND8FB3DV41'
    },
    enabled: getGDPR === 'true',
    pageTrackerScreenviewEnabled: true
  }, nuxtApp.vueApp.router);
});