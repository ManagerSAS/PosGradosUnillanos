<template>
  <div class="font-gotham">
    <Header/>
    <MobileNavigation/>
    <Welcome/>
    <Social/>
    <About />
    <CallToAction style="background-image: url('https://res.cloudinary.com/dhl17zanz/image/upload/v1647546986/images/group-of-people-working-out-business-plan-in-an-office_2_sn1ihq_gxawh9.webp')"/>
    <PosGrados />
    <Process style="background-color: #f2f2f2;"/>
    <Frequent />
    <Footer style="background-color: #141a21"/>
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
