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
                                <img src="/Logo.png" width="200px" alt="Logo"/>
                            </n-link>
                        </div>
                        <div style="font-family: 'Quicksand', sans-serif;" class="footer-widget-content">
                            <div class="content" style="line-height: normal;">
                                <p style="font-family: 'Quicksand', sans-serif;">Nit: 892.000.757-3</p>
                                <p style="font-family: 'Quicksand', sans-serif;">Linea Gratuita PQRs: 018000918641</p><br>
                                <p style="font-family: 'Quicksand', sans-serif;">Contacto@unillanos.edu.co</p>
                                <p style="font-family: 'Quicksand', sans-serif;">notificacionesjudiciales@unillanos.edu.co</p> <br>
                                <p style="font-family: 'Quicksand', sans-serif; color: #748494;">Políticas de Privacidad y Términos de Uso Estatuto sobre Propiedad Intelectual de la </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->
            
                <!-- Footer Widget Start -->
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-30">
                    <div class="footer-widget">
                        <h4 style="font-family: 'Quicksand', sans-serif;" class="footer-widget-title">Ubícanos</h4>
                        <div class="footer-widget-content">
                            <div class="content" style="line-height: normal;">
                                <p style="font-family: 'Quicksand', sans-serif;">Barcelona: Km. 12 Vía Puerto López - PBX. 60 (8)6616800</p>
                                <p style="font-family: 'Quicksand', sans-serif;">San Antonio: Calle 37 No. 41-02 Barzal - PBX. 60(8) 6616900</p><br>
                                <p style="font-family: 'Quicksand', sans-serif;">Emporio: Calle 40 A No. 28-32 Emporio - 60 (8)6734700</p>    
                                <p style="font-family: 'Quicksand', sans-serif;">Horario de atención: Lunes a Viernes 7:30am a 11:30m y 2:00pm a 5:30pm</p> <br>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer Widget End -->


                <!-- Footer Widget Start -->
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-30">
                    <div class="footer-widget">
                        <h4 style="font-family: 'Quicksand', sans-serif;" class="footer-widget-title ">Agremiaciones</h4>
                        
                        <span style="font-family: 'Quicksand', sans-serif;  color: white;" >Miembros del consejo directivo nacional de la Asociación Colombiana de la Industria de la Comunicación Gráfica</span>
                        <div class="footer-widget-content">
                            <img src="https://res.cloudinary.com/dhl17zanz/image/upload/c_scale,h_60/v1647033742/images/logos/Andigraf_s8fnzm.png" alt="" srcset="">
                        </div><br>
                        <span style="font-family: 'Quicksand', sans-serif;  color: white;" >Miembros de la Federación Nacional de Comerciantes - seccional villavicencio</span>
                        <div class="footer-widget-content ">
                            <img src="https://res.cloudinary.com/dhl17zanz/image/upload/c_scale,h_50/v1647033742/images/logos/Fenalco_1_ihqrys.png" alt="" srcset="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Top Widgets End -->

            <!-- Footer Copyright Start -->
            <div class="row">
                <div class="col">
                    <p class="copyright white--text">&copy; 2022 Manager <i class="fa fa-heart text-danger"></i> by <a href="https://www.agenciamanager.com" target="_blank">Agencia Manager</a></p>
                </div>
            </div>
            <!-- Footer Copyright End -->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                footerDataLineas:[
                    {
                        navTitle: "Agencia",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Capacitaciones",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Imprenta",
                        navUrl: "https://agenciamanager.com/" 
                    }
                ],
                footerDataServices:[
                    {
                        navTitle: "Diseño",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Creación de marca",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Desarrollo de software",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Multimedia ",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Redes sociales",
                        navUrl: "https://agenciamanager.com/" 
                    },
                    {
                        navTitle: "Protección de datos",
                        navUrl: "https://agenciamanager.com/poticadeDatos" 
                    }
                ]
            }
        },
    };
</script>