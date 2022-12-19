export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Posgrados Unillanos',
    title: 'Unillanos-PosGrados',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Encuentra tu posgrado aquí' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
      { rel: 'preload',  as:"font" }
    ]
  },
  script: [
    { hid: 'stripe', src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js#038;ver=2.2.4',id:'jquery-js', defer: true },
    // {
    //   children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    //   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    //   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    //   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    //   })(window,document,'script','dataLayer','GTM-W54X9GK');
    // `,
    //   type: 'text/javascript',
    //   src:'https://www.googletagmanager.com/ns.html?id=GTM-W54X9GK',
    //   async: true,
    //   mode: 'client',
    // }
    // {src:'pixel.js', type: 'text/javascript'}
  ],
  router: {
    prefetchLinks: false
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@Plugins/tag.js',
    // '@/plugins/analytics.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
    // '@nuxtjs/google-gtag',
  ],
  googleAnalytics: {
    id: 'G-ND8FB3DV41'
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: '4366253190'
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-facebook-pixel-module',
    
     ['@nuxtjs/google-tag-manager', { id: 'GTM-W54X9GK' }],
  ],
  // gtm:{
  //   id:'GTM-W54X9GK'
  // },
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '5777231608978815',
    autoPageView: true,
    disabled: false
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
