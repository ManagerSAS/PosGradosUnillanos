<template>
        <div class="intro-slider">
            <div class="intro-section bg-cover" style="background-image: url('/BannerPc.jpg')">
                <v-container fluid class="intro-content ">
                   <v-row align="center" justify="center" >
                        <v-col  align="center" justify="center" cols="12" offset-xl="7"  offset-lg="6" class="mr-lg-1 mr-md-1 pa-5 mt-15" offset-md="5" md="6" lg="4" sm="8"> 
                            <p class="title-form">Solicita Información</p>
                            <v-text-field
                                label="Outlined"
                                placeholder="Placeholder"
                                solo
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Outlined"
                                placeholder="Placeholder"
                                solo
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Outlined"
                                placeholder="Placeholder"
                                solo
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Outlined"
                                placeholder="Placeholder"
                                solo
                                dense
                            ></v-text-field>
                            <v-text-field
                                label="Outlined"
                                placeholder="Placeholder"
                                solo
                                dense
                            ></v-text-field>
                            <v-select
                                :items="items"
                                label="Outlined"
                                placeholder="Placeholder"
                                solo
                                dense
                            ></v-select>
                            <v-checkbox
                                
                                label="Acepto Terminos y Condiciones*"
                            ></v-checkbox>
                            <v-row>
                                <v-col>
                                    <v-btn
                                        color="red"
                                        elevation="2"
                                    >Enviar Información</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                   </v-row>
                </v-container>
            </div>
            <!-- <div justify="center" align="center" class="intro-section bg-cover d-block d-sm-block d-md-none" style="background-image: url('/MiTarjetaDigital/Images/Bannercel.jpg')">
                <div class="intro-content content-btn" >
                    <a style="text-decoration: none; " href="https://api.whatsapp.com/send?phone=573242892413&text=!Hola!%2C%20Quiero%20adquirir%20mi%20tarjeta%20digital" target="_blanck"><button  aria-label="Adquiere tu tarjeta digital" aria-hidden="true"  class="ml-lg-15 ml-md-15 mb-md-15 mb-lg-10 ml-sm-0 btn-hover rounded-pill pa-1 pl-2 pr-2 pl-10 pr-10">¡Aquiere la tuya!</button></a>
                </div>
            </div> -->
        </div>
</template>
<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>
