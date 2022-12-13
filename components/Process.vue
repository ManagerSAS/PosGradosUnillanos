<template>
  <v-container id="process" fluid class="pt-10 pb-10">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center" style="background-color:#fbb03b">
                <h3 class="titles white--text">¿CÓMO ES EL PROCESO <br> <span class="font-weight-light " >DE MATRÍCULA?</span> </h3>
                <div class="linea-white"></div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-8 ma-2">
            <v-col justify="center" align="center" cols="12" md="11" lg="9" sm="12" >
                <v-row justify="center" align="center">
                    <v-col cols="12" md="3" lg="3" xl="3" >
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="360"
                            elevation="2"
                        >
                            <v-img 
                            class="overlay"
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            ></v-img>
                            <br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start">
                                    <p class="Text-Paso">1. Preinscríbete aquí.</p>
                                    <div class="textDescripPaso">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    </div>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3" xl="3" >
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="360"
                            elevation="2"
                        >
                            <v-img
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            ></v-img><br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start">
                                    <p class="Text-Paso">2. Realiza el pago</p>
                                    <div class="textDescripPaso">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    </div>
                                </v-row>
                            </div >
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3" xl="3" >
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="360"
                            elevation="2"
                        >
                            <v-img
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            ></v-img><br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start">
                                    <p class="Text-Paso">3. Finaliza tu inscripción</p>
                                    <div class="textDescripPaso">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    </div>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3" xl="3" >
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="360"
                            elevation="2"
                        >
                            <v-img
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            ></v-img><br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start">
                                    <p class="Text-Paso">4. Paga tus derechos  de matricula</p>
                                    <div class="textDescripPaso">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    </div>
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
/* .hover{
    position: relative;
} */
.overlay {
    position: relative;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: none;
        background: linear-gradient(to right,  rgba(44, 105, 228, 0.7) 0%,rgba(3,15,39,0) 100%); 
    } 
}
.hover:hover .overlay{
    position: relative;
    bottom: 2px;
    display: block   ;

}
</style>
