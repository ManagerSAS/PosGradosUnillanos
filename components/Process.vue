<template>
  <v-container id="process" fluid class="pt-10 pb-10">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center" style="background-color:#fbb03b">
                <h3 class="titles white--text">¿CÓMO ES EL PROCESO <br> <span class="font-weight-light " >DE MATRÍCULA?</span> </h3>
                <div class="linea-white"></div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-8 ma-2">
            <v-col justify="center" align="center" cols="12" md="11" lg="10" xl="9" sm="12" >
                <v-row justify="center" align="center">
                    <v-col cols="12" md="3" lg="3" xl="3" class="contenedorhover">
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="320"
                            elevation="7"
                            style="border-radius: 0"
                        >
                            <v-img 
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            >
                        </v-img>
                            <v-btn
                                align="end"
                                class="btn-sgt"
                                color="#fbb03b"
                                elevation="2"
                                fab
                                dark
                                small
                            ><v-icon dark>
                                mdi-chevron-double-right
                            </v-icon></v-btn>
                            <div class="overlay"></div>
                            
                            <br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start" class="line-height">
                                    <p class="Text-Paso">1. Preinscríbete  <a href="https://siau.unillanos.edu.co:8443/ORION/Preregistro" target="_blanck">Aquí.</a> </p>
                                    <p class="Text-Description1 mx-2">Diligencia el formulario de preinscripción.</p>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3" xl="3" class="contenedorhover" >
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="320"
                            elevation="7"
                            style="border-radius: 0"
                        >
                            <v-img
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            ></v-img>
                            <v-btn
                                align="end"
                                class="btn-sgt"
                                color="#00273d"
                                elevation="2"
                                fab
                                dark
                                small
                            ><v-icon dark>
                                mdi-chevron-double-right
                            </v-icon></v-btn>
                            <div class="overlay"></div>
                            <br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start" class="line-height">
                                    <p class="Text-Paso">2. Realiza el pago</p>
                                    <p class="Text-Description1 mx-2">Puedes realizar el pago en efectivo, PSE o tarjeta de crédito.</p>
                                </v-row>
                            </div >
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3" xl="3" class="contenedorhover">
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="320"
                            elevation="7"
                            style="border-radius: 0"
                        >
                            <v-img
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            ></v-img><div class="overlay"></div>
                            <v-btn
                                align="end"
                                color="#fbb03b"
                                class="btn-sgt"
                                elevation="2"
                                fab
                                dark
                                small
                            ><v-icon dark>
                                mdi-chevron-double-right
                            </v-icon></v-btn>
                            <br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start" class="line-height">
                                    <p class="Text-Paso">3. Finaliza tu inscripción</p>
                                    <p class="Text-Description1 mx-2">Recibirás correo de confirmación y se habilita el formulario de inscripción.</p>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3" xl="3" class="contenedorhover">
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="320"
                            elevation="7"
                            style="border-radius: 0"
                        >
                            <v-img
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            ></v-img><div class="overlay"></div>
                            <br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start" class="line-height">
                                    <p class="Text-Paso">4. Paga tus derechos  de matrícula</p>
                                    <p class="Text-Description1 mx-2 mb-2">Para finalizar el proceso solo debes realiza el pago de los derechos de matrícula.</p>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
  </v-container>
</template>
<style lang="scss">
.btn-sgt{
    left: 11.5em;
    z-index: 1; 
    bottom: 1.5em;
    @media #{$Cel-Small,$Cel-Large,$tablet-device}{
        left: 0;
        z-index: 1; 
        top: 6.5em;
        transform: rotate(90deg);
    }
    @media #{$desktop-device,$laptop-device}{
        left: 9.5em;
    }
}
.contenedorhover:hover{
    position: relative;
    transform: translate(0px, -15px);
    z-index: 1; 
} 
.contenedorhover{
    z-index: 1; 
    transition: transform 220ms ease-out;
}
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    width: 100%;
    opacity: 0;
    
    background-color: rgba($color: #fbb03b, $alpha: .3);
}
.hover:hover .overlay{
    opacity: 1;
}
</style>
