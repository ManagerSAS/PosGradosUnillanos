<template>
  <v-container fluid id="featured" class="pt-15 pb-15 font-gotham">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="titles ">¿POR QUÉ HACER MIS POSGRADO <br> <span class="font-weight-light" >EN UNILLANOS?</span> </h3>
                <div class="linea"></div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center"  cols="12" md="11" lg="9" sm="11">
                <v-row  justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" lg="11" md="11" sm="12" >
                        <VueSlickCarousel v-bind="settings" :arrow="true" justify="center" align="center">
                            <div justify="center" align="center" v-for="({icon,title ,desc}, index) in information" :key="index" class="contenCard pr-5 pl-5">
                                <div class="pt-10 pb-5">
                                    <img :src="icon" class="IconAbaot" alt="">
                                </div>
                                <div>
                                    <h3>{{title}}</h3>
                                    <p class="Text-Description" style="text-overflow: ellipsis;">{{desc}}</p> 
                                    
                                </div>
                            </div>
                        </VueSlickCarousel>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
  </v-container>
</template>
<style lang="scss">
.slick-prev:before {
    content: url('../static/right.png');
    //  color: #395730 !important; 
     width: 15px;
  }
.slick-next:before {
    content: url('../static/left.png');
    // color: #395730 !important; 
    /* font-size: 30px; */
}
</style>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    components: { VueSlickCarousel },
    data: () => ({
        information: [
            {icon:'/certified1.png', title:'Somos calidad', desc:'El Ministerio de Educación Nacional, mediante Resolución número 5310 del 8 de abril de 2022, otorgó la Acreditación Institucional en Alta Calidad a la Universidad de los Llanos, un logro que se alcanza después de varios años de trabajo, esfuerzo y compromiso.'},
            {icon:'/user.png', title:'¡Te enseñan doctores!', desc:'Contamos con más de 100 doctores de orden local, regional, nacional e internacional para alcanzar una oferta académica de calidad para la Orinoquia'},
            {icon:'/certified2.png',title:'Estamos categorizados por Colciencias',  desc:'Más del 80% de nuestros doctores son categorizados por Colciencias.'},
            {icon:'/certified2.png',title:'Promovemos la investigación',  desc:'Tenemos más de 10 investigadores senior con proyectos de alto impacto social y excelencia académica en procesos de cualificación.'},
            {icon:'/certified2.png',title:'Somos la única universidad con doctorado',  desc:'Reconocido por el ministerio con registro calificado. SNIES 102256'},
        ],
        settings: {
                "dots": true,
                "autoplay": true,
                "infinite": true,
                "arrow":true,
                "autoplaySpeed": 4000,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "responsive": [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                    "breakpoint": 414,
                        "settings": {
                            "arrows": false,
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                    "breakpoint": 425,
                        "settings": {
                            "arrows": false,
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                    "breakpoint": 720,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false
                        }
                    }
                ]
            },  
    }),
  }
</script>
