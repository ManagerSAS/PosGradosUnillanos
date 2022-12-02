<template>
  <div>
    <Header/>
    <MobileNavigation/>
    <Welcome/>
    <Social/>
    <About />
    <CallToAction style="background-color: rgba(255, 125, 0, 0.1);"/>
    <PosGrados />
    <Process style="background-color: rgba(255, 125, 0, 0.1);"/>
    <Frequent />
    <Footer style="background-color: rgba(255, 125, 0, 0.1);"/>
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
import Frequent from '~/components/Frequent.vue';
import CallToAction from '~/components/CallToAction.vue';

export default {
    components: { Header, Welcome, Social, About, PosGrados, Process, Footer, MobileNavigation, Frequent,CallToAction }
}
</script>
