<template>
  <div>
    <Header/>
    <MobileNavigation/>
    <Welcome/>
    <Social/>
    <About/>
    <PosGrados/>
    <Process/>
    <Footer/>
  </div>
</template>
<script>
import Header from '~/components/Header.vue';
import Welcome from '~/components/Welcome.vue';
import Social from '~/components/Social.vue';
import About from '~/components/About.vue';
import PosGrados from '~/components/PosGrados.vue';
import Process from '~/components/Process.vue';
import Footer from '~/components/Footer.vue';
import MobileNavigation from '~/components/MobileNavigation.vue';
export default {
    components: { Header, Welcome, Social, About, PosGrados, Process,Footer,MobileNavigation }
}
</script>
