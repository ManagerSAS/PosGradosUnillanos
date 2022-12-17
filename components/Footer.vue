<template>
    <div class="footer-section" :style="{backgroundColor: '#030e22'}">
        <div class="container">
            <!-- Footer Top Widgets Start -->
            <div class="row section-padding pt-0 mtn-30">
                <!-- Footer Widget Start -->
                <div class="col-md-4 col-sm-6 col-12 mt-30">
                    <div class="footer-widget">
                        <div class="footer-logo">
                            <n-link to="/">
                                <img src="/logo.png" width="200px" alt="Logo"/>
                            </n-link>
                        </div>
                        <div class="footer-widget-content">
                            <div class="content" style="line-height: normal;">
                                <p>Nit: 892.000.757-3</p>
                                <p>Linea Gratuita PQRs: 018000918641</p><br>
                                <p>Contacto@unillanos.edu.co</p>
                                <p>notificacionesjudiciales@unillanos.edu.co</p> <br>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->
            
                <!-- Footer Widget Start -->
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-30">
                    <div class="footer-widget">
                        <h4 class="footer-widget-title">Ubícanos</h4>
                        <div class="footer-widget-content">
                            <div class="content" style="line-height: normal;">
                                <p>Barcelona: Km. 12 Vía Puerto López - PBX. 60 (8)6616800</p>
                                <p>San Antonio: Calle 37 No. 41-02 Barzal - PBX. 60(8) 6616900</p><br>
                                <p>Emporio: Calle 40 A No. 28-32 Emporio - 60 (8)6734700</p>    
                                <p>Horario de atención: Lunes a Viernes 7:30am a 11:30m y 2:00pm a 5:30pm</p> <br>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->


                <!-- Footer Widget Start -->
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-30">
                    <div class="footer-widget" justify="center" align="center">
                        <h4 class="footer-widget-title ">Síguenos</h4>
                        <v-row justify="center" align="center">
                            <v-col class="px-5" cols="1" >
                               <a href="https://api.whatsapp.com/send?phone=573023179118" target="_blank" style="text-decoration: none" rel="noopener noreferrer"><v-icon color="white" href="">mdi-whatsapp mdi-36px</v-icon></a>
                            </v-col>
                            <v-col class="px-5" cols="1" >
                                <a href="https://www.facebook.com/UnillanosOficial" target="_blanck" style="text-decoration: none"><v-icon color="white" >mdi-facebook mdi-36px</v-icon></a>
                            </v-col>
                            <v-col class="px-5" cols="1" >
                                <a href="https://www.instagram.com/unillanos_/" target="_blank " style="text-decoration: none" rel="noopener noreferrer"><v-icon color="white">mdi-instagram mdi-36px</v-icon></a>
                            </v-col>
                            <v-col class="px-5" cols="1" >
                               <a href="https://www.unillanos.edu.co/?fbclid=IwAR3Pn1S0Jo8vT_pCHY5lJndTrGWBAKMHXLM20TfRkPmRwuMlM22KdfHHGA4" style="text-decoration: none" target="_blank" rel="noopener noreferrer"> <v-icon color="white">mdi-web mdi-36px</v-icon></a>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </div>
            <v-row align="center" justify="center">
                <v-col align="center" justify="center" v-for="({src}, index) in LogosRegulador" :key="index">
                    <img preload loading="lazy" max-height="50"  class="logos" :src="src" alt=""/>
                </v-col>
            </v-row>
            <div class="row">
                <div class="col">
                    <p class="copyright white--text">&copy; 2022 <i class="fa fa-heart text-danger"></i> Desarrollado por <a href="https://www.agenciamanager.com" target="_blank" >Manager ~ El equipo para tu marca</a></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                LogosRegulador:[
                    {
                        src: "/iconos/log-gobiern.webp",
                    },
                    {
                        src: "/iconos/logo-suit.webp",
                    },
                    {
                        src: "/iconos/snies.webp",
                    },
                    {
                        src: "/iconos/secop.webp",
                    },
                    {
                        src: "/iconos/compra-eficientew.webp",
                    },
                    {
                        src: "/iconos/sigepw.webp",
                    },
                    {
                        src: "/iconos/minTic_2.webp",
                    },
                    {
                        src: "/iconos/govco.webp",
                    }
                ]
            }
        },
    };
</script>