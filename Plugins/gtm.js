import {createGtm} from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp)=>{
    nuxtApp.vueApp.use(createGtm({
        id:'GTM-W54X9GK',
        // defer: false,
        // compatibility: false,
        // enabled:false,
        // debug: true,
        // loadScript:true,
        // vueRouter: useRouter(),
        // trackOnNextTick: false
    }))
})