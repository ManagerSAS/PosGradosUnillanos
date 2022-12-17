<template>
  <v-container fluid id="featured" class="pt-15 pb-15 font-gotham">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="titles ">¿POR QUÉ HACER MI POSGRADO <br> <span class="font-weight-light" >EN UNILLANOS?</span> </h3>
                <div class="linea"></div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center"  cols="12" md="12" lg="10" sm="11">
                <v-row  justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" lg="12" xl="11" md="11" sm="12" >
                        <VueSlickCarousel v-bind="settings" :arrow="true" justify="center" align="center">
                            <div justify="center" align="center" v-for="({icon,title ,desc,py1,mx}, index) in information" :key="index" class="contenCard pr-5 pl-5">
                                <div class="pt-10 pb-5">
                                    <v-img preload loading="lazy" fit="cover" :src="icon" class="IconAbaot" alt=""/>
                                </div>
                                <div :class="mx">
                                    <h3 class="Title">{{title}}</h3>
                                </div>
                                <div :class="py1">
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
<style >
.slick-prev:before {
    content: url('../static/iconos/right.png');
}
.slick-next:before {
    content: url('../static/iconos/left.png');
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
            {
                mx:'mx-sm-15 mx-lg-0 mx-xl-15 mx-md-0', 
                py1:'px-6 py-7',
                icon:'/iconos/calidad.webp', 
                title:'Somos calidad', 
                desc:'El Ministerio de Educación Nacional, mediante Resolución número 5310 del 8 de abril de 2022, otorgó la Acreditación Institucional en Alta Calidad a la Universidad de los Llanos'
            },
            {
                mx:'mx-sm-15 mx-lg-15 mx-xl-15 px-xl-15 mx-md-0',
                py1:'px-6 py-2',
                icon:'/iconos/maestros.webp', 
                title:'¡Te enseñan Doctores!', 
                desc:'Contamos con más de 100 doctores de orden local, regional, nacional e internacional para alcanzar una oferta académica de calidad para la Orinoquia'},
            {
                mx:'mx-sm-15 mx-lg-5 mx-xl-15 mx-md-0',
                py1:'px-6 py-2',
                icon:'/iconos/colciencias.webp',
                title:'Estamos categorizados por Colciencias',  
                desc:'Más del 80% de nuestros Doctores son categorizados por Colciencias.'},
            {
                mx:'mx-sm-15 mx-lg-10 mx-xl-15 mx-md-0',
                py1:'px-6 py-2',
                icon:'/iconos/investigacion.webp',
                title:'Promovemos la investigación',  
                desc:'Tenemos más de 10 investigadores senior con proyectos de alto impacto social y excelencia académica en procesos de cualificación.'},
            {
                mx:'mx-sm-15 mx-lg-0 mx-xl-15 mx-md-0',
                py1:'px-6 py-2',
                icon:'/iconos/masgrandedelaregion.webp', 
                title:'¡Somos la Universidad más grande de la región!', 
                desc:'El campus Barcelona, ubicado a 12 km del centro de la ciudad, abarca una extensión de 43.2 ha, y la sede San Antonio, de 2.67 ha, situada en sector céntrico de la capital.'},
            {
                mx:'mx-sm-15 mx-lg-15 mx-xl-15 px-xl-15 mx-md-0',
                py1:'px-6 py-2',
                icon:'/iconos/sedegranada.webp', 
                title:'Tenemos sede en Granada', 
                desc:'En nuestra sede Boquemonte ya se encuentra disponible la especialización en Gestión de Proyectos para el municipio de Granada.'},
            {
                mx:'mx-sm-15 mx-lg-0 mx-xl-15 mx-md-0',
                py1:'px-6 py-2',
                icon:'/iconos/dostorado.webp',
                title:'Somos la única universidad con Doctorado',  
                desc:'Reconocido por el Ministerio de Educación con registro calificado. SNIES 102256'},
            {
                mx:'mx-sm-15 mx-lg-0 mx-xl-15 mx-md-0',
                py1:'px-6 py-2',
                icon:'/iconos/mediacolombia.webp',
                title:'Somos la universidad de media Colombia',  
                desc:'Con más de 600 profesionales en la modalidad de formación de posgrados'},
        ],
        settings: {
            "dots": false,
            "autoplay": true,
            "infinite": true,
            "arrow":true,
            "autoplaySpeed": 4000,
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "responsive": [
                {
                "breakpoint": 1396,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": false
                    }
                },
                {
                "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": false
                    }
                },
                {
                "breakpoint": 414,
                    "settings": {
                        "arrows": false,
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": false
                    }
                },
                {
                "breakpoint": 425,
                    "settings": {
                        "arrows": false,
                        "slidesToShow": 1,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": false
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
