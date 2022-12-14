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
                    <v-col cols="12" md="3" lg="3" xl="3" class="contenedorhover">
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="300"
                            elevation="7"
                            style="border-radius: 0"
                        >
                            <v-img 
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            ></v-img>
                            <div class="overlay"></div>
                            <br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start">
                                    <p class="Text-Paso">1. Preinscríbete  <a href="" target="_blanck">Aquí.</a> </p>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3" xl="3" class="contenedorhover" >
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="300"
                            elevation="7"
                            style="border-radius: 0"
                        >
                            <v-img
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            ></v-img>
                            <div class="overlay"></div>
                            <br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start">
                                    <p class="Text-Paso">2. Realiza el pago</p>
                                </v-row>
                            </div >
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3" xl="3" class="contenedorhover">
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="300"
                            elevation="7"
                            style="border-radius: 0"
                        >
                            <v-img
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            ></v-img><div class="overlay"></div><br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start">
                                    <p class="Text-Paso">3. Finaliza tu inscripción</p>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" lg="3" xl="3" class="contenedorhover">
                        <v-card
                            class="mx-auto hover"
                            max-width="280"
                            height="300"
                            elevation="7"
                            style="border-radius: 0"
                        >
                            <v-img
                                height="200"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            ></v-img><div class="overlay"></div><br>
                            <div class="mr-5 ml-5">
                                <v-row justify="center" align="start">
                                    <p class="Text-Paso">4. Paga tus derechos  de matricula</p>
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
.contenedorhover:hover{
    position: relative;
    transform: translate(0px, -15px)
} 
.contenedorhover{
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
    // transform: translate(0px, -20px)
    // transition:all .2 ease-in-out;
    // -webkit-transition:all .2 ease-in-out;
    // display: block;

}
</style>
