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
      { name: 'format-detection', content: 'telephone=no' },
      { name:'facebook-domain-verification', content:'fosej3bou9xpo2zoty8c3uvf72niys'},
      { name:'keywords', content:'posgrados Universidad de los Llanos, posgrados,posgrados a distancia,[posgrados],[posgrados a distancia],becas para posgrados,becas para maestría,becas para especializaciones,[especializaciones uniminuto],Maestria en Administracion de Negocios,Seguridad y Salud en el Trabajo,[becas para posgrados],[becas para maestria],especializaciones uniminuto,uniminuto villavicencio,Especialización en Finanzas,Maestría en Estudios Culturales,posgrados uniminuto,Maestria en Educacion,[maestría uniminuto],posgrados unillanos,posgrados en villavicencio,[becas para especializaciones],[posgrados uniminuto],[uniminuto villavicencio],especializaciones en villavicencio,[especializaciones en villavicencio],[Maestria en Administracion de Negocios],[unillanos posgrados],especializaciones unillanos,maestrias unillanos,[especializaciones unillanos],[maestrias unillanos],[Seguridad y Salud en el Trabajo],unillanos posgrados,[posgrados en villavicencio],maestría uniminuto,[Especialización en Finanzas],Maestria en Seguridad y Salud en el Trabajo,Doctorado en Ciencias Agrarias,[posgrados santo tomas villavicencio],posgrados santo tomas villavicencio,doctorado en villavicencio,phd en villavicencio,Especializacion en Administracion de Negocios,Especializacion en Administracion en Salud,Especializacion en Epidemiologia,Especializacion en Gestion de Proyectos,Especializacion en Gestion de la Calidad,Especializacion en Ingeniería de Software,Maestria en Epidemiologia,posgrados Universidad de los Llanos,posgrados icetex villavicencio,[Doctorado en Ciencias Agrarias],[Especializacion en Administracion de Negocios],[Especializacion en Administracion en Salud],[Especializacion en Epidemiologia],[Especializacion en Gestion de Proyectos],[Especializacion en Gestion de la Calidad],[Especialización en Ingenieria de Software],[Maestria en Educacion],[Maestria en Epidemiología],[Maestria en Estudios Culturales],[Maestria en Seguridad y Salud en el Trabajo],[doctorado en villavicencio],[phd en villavicencio],[posgrados icetex villavicencio],[posgradosunimeta],doctorado unillanos,posgrados unimeta,“posgrados”,“unillanos especializaciones”,“unillanos maestrías”,“unillanos doctorado”,“posgrados a distancia”,“becas para posgrados”,“becas para maestría”,“becas para especializaciones”,“Seguridad y Salud en el Trabajo”,“Maestría en Seguridad y Salud en el Trabajo”,“Maestría en Administración de Negocios”,“Maestría en Educación”,“uniminuto villavicencio”'},
    {name:'keywords', content:'“Maestría en Administración de Negocios”,“Maestría en Educación”,“uniminuto villavicencio”,“Especialización en Finanzas”,“Maestría en Estudios Culturales”,“posgrados uniminuto”,“posgrados en villavicencio”,“especializaciones uniminuto”,“Maestría en Epidemiología”,“Especialización en Gestión de Proyectos”,“unillanos posgrados”,“maestría uniminuto”,“Especialización en Epidemiología”,“Especialización en Administración de Negocios”,“Doctorado en Ciencias Agrarias”,“Especialización en Administración en Salud”,“Especialización en Gestión de la Calidad”'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
      { rel: 'preload',  as:"font" }
    ]
  },
  script: [
    { hid: 'stripe', src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js#038;ver=2.2.4',id:'jquery-js', defer: true },
    // {
    //   children: `(window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());
    //     gtag('config', 'G-ND8FB3DV41');
    // `,
    //   type: 'text/javascript',
    //   src:'https://www.googletagmanager.com/gtag/js?id=G-ND8FB3DV41',
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
    '@/plugins/analytics.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // '@nuxtjs/google-gtag',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    'nuxt-facebook-pixel-module',
    //  ['@nuxtjs/google-tag-manager', { id: '' }],
  ],
  gtm: {
    id: 'GTM-W54X9GK', // Used as fallback if no runtime config is provided
  },

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
