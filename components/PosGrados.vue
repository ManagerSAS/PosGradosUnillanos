<template>
   <v-container fluid id="Programas" class="pt-10 pb-10">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="titles ">NUESTROS PROGRAMAS <br> <span class="font-weight-light" >DE POSGRADO</span> </h3>
                <div class="linea"></div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="12" md="10" lg="8" sm="12">
                <v-row justify="center" align="center"> 
                    <v-col cols="12" md="34" sm="3" justify="center" align="center">
                      <v-btn
                        block
                        hide-details
                        style="border-radius:0; background-color: #1a212f; color: white;"
                        @click="all()"
                      >Todos los Posgrados</v-btn>
                    </v-col>
                    <v-col cols="12" md="3" sm="3" justify="center" align="center">
                      <v-btn
                        block
                        hide-details
                        style="border-radius:0; background-color: #1a212f; color: white;"
                        @click="filter('Es')"
                      >Especializacion</v-btn>
                    </v-col>
                    <v-col cols="12" md="3" sm="3" justify="center" align="center">
                        <v-btn
                            block
                            style="border-radius:0; background-color: #1a212f; color: white;"
                            hide-details
                            @click="filter('Ma')"
                        >Maestrias
                        </v-btn>
                    </v-col>
                    <v-col cols="12" md="3" sm="3" justify="center" align="center">
                        <v-btn
                            block
                            hide-details
                            @click="filter('Doc')"
                            style="border-radius:0; background-color: #1a212f; color: white;"
                        >Doctorado</v-btn>
                    </v-col>
                </v-row>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-col justify="center" align="center"  cols="12" md="11" lg="10" sm="12">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" lg="3" md="4" sm="12" v-for="(inf, index) in information" :key="index">
                        <div justify="center" align="center" class="ma-5">
                            <div>
                                <v-img :src="inf.icon" class="FotoPostGrado" alt="">
                                    <div align="start" class="contentPost ml-2 Text-PostGrado">
                                        <div>
                                            <h4 class="Postgrado">{{inf.title}}</h4>
                                        </div>
                                        <div >
                                            <h4 class="namePosgrado">{{inf.name}}</h4 >
                                        </div>
                                    </div>    
                                </v-img>
                            </div>
                            <div align="start" class="mt-2 mb-2">
                                <p class="Text-Description">{{inf.desc}}</p> 
                            </div>
                            <div align="start">
                                <v-btn hide-details style="border-radius:0" class="pa-0" width="80%" color="#fbb03b" outlined >
                                    VER PLAN DE ESTUDIOS
                                </v-btn>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
          </v-row>
   </v-container>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { all } from 'q';
  export default {
    components: { VueSlickCarousel },
    data: () => ({
        dialog: false,
        infPosGrados:[],
        information: [
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Gestión ambiental sostenible', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Ingeniería de software', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Salud familiar', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Producción agrícola tropical sostenible', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'RF y sistemas radar', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Instrumentación y control industrial', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Administración en salud', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Epidemiología', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Seguridad y salud en el trabajo', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Acción motriz', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},  
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Acuicultura aguas continentales', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},  
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Administración de negocios', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},  
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Gestión de la calidad', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},  
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Gestión ambiental sostenible', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},  
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Sistemas sostenibles de salud- producción animal tropical', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},  
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Acuicultura', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Producción tropical sostenible', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Estudios de desarrollo local', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Estudios culturales', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Epidemiología', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Educación', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Administración de negocios', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Seguridad y salud en el trabajo', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},          
            {icon:'/BannerPc.jpg',type:'Doc',title:'Doctorado en', name:'Ciencias agrarias', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},          
        
        ],
    }),
    created(){
        this.infPosGrados = this.information;
    },
    methods:{
        filter(typePos){
            this.information = this.infPosGrados
            this.information =this.information.filter(
                inf => {
                    return inf.type == typePos
                }
            )
        },
        all(){
            this.information = this.infPosGrados
        }
    }
  }
</script>
