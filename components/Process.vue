<template>
  <v-container fluid class="pt-10 pb-10">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center" style="background-color:#fbb03b">
                <h3 class="titles white--text">¿CÓMO ES EL PROCESO <br> <span class="font-weight-light " >DE MATRÍCULA?</span> </h3>
                <div class="linea-white"></div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-8 mb-8">
            <v-col justify="center" align="center" cols="12" md="10" sm="12" lg="8">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi eligendi omnis dignissimos voluptatum, ab, illo totam unde error quasi vero, cupiditate accusamus expedita nihil provident rerum! Fugit, sunt ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at laboriosam possimus repudiandae pariatur, sed, quasi repellendus illum officiis porro quia voluptate ratione doloribus quaerat, atque tenetur saepe veritatis itaque.</p>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" md="10" lg="10" sm="12">
                <v-row  justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" lg="3" md="4" sm="12" v-for="({icon, desc}, index) in information" :key="index">
                        <div justify="center" align="center" style="border-radius:0; background-color:#e6e6e6" class="pa-5 mt-0  ma-7">
                            <div>
                                <img :src="icon"  class="IconAbaot" alt="">
                            </div>
                            <div>
                               <p class="Text-Description">{{desc}}</p> 
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
        information: [
            {icon:'/descarga.png', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'},
            {icon:'/descarga.png', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'},
            {icon:'/descarga.png', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'},
        ],
    }),
  }
</script>