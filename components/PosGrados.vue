<template>
   <v-container fluid class="pt-10 pb-10">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="titles ">NUESTROS PROGRAMAS <br> <span class="font-weight-light" >DE POSGRADO</span> </h3>
                <div class="linea"></div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="12" md="10" lg="8" sm="12">
                <v-row justify="center" align="center"> 
                    <v-col cols="12" md="4" sm="3" justify="center" align="center">
                      <v-btn
                        block
                        hide-details
                        style="border-radius:0; background-color: #1a212f; color: white;"
                        @click="filter('Es')"
                      >Especializacion</v-btn>
                    </v-col>
                    <v-col cols="12" md="4" sm="3" justify="center" align="center">
                        <v-btn
                            block
                            style="border-radius:0; background-color: #1a212f; color: white;"
                            hide-details
                            @click="filter('Ma')"
                        >Maestrias
                        </v-btn>
                    </v-col>
                    <v-col cols="12" md="4" sm="3" justify="center" align="center">
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
                            <div class="mt-2 mb-2">
                                <p class="Text-Description">{{inf.desc}}</p> 
                            </div>
                            <div align="start">
                                <v-btn hide-details style="border-radius:0" class="pa-0" width="80%" color="#fbb03b" outlined @click="dialog == !dialog">
                                    VER PLAN DE ESTUDIOS
                                </v-btn>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
          </v-row>
        <v-dialog
            v-model="dialog"
            transition="dialog-bottom-transition"
            width="100%"
            min-width="600"
        >
            <v-card align="center" justify="center">
                <v-container>
                    <v-row justify="center" align="center">
                        <v-col justify="center" align="center" cols="10">
                            <h3 class="ma-5 text-titles">Pensum carrera</h3>
                        </v-col>
                    </v-row>
                    <VueSlickCarousel v-bind="settings" :arrows="true"  justify="center" align="center" >
                        <div v-for="({title, materia, credit}, index) in Pensum" :key="index">
                            <v-card align="center" justify="center" class="ma-2 pa-2">
                                <div class="ma-2">
                                    <div >
                                        <p>
                                            {{title}}
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            {{materia}}
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            {{credit}}
                                        </p>
                                    </div>
                                </div>
                            </v-card>
                        </div>
                    </VueSlickCarousel >
                </v-container>
            </v-card>
        </v-dialog>
   </v-container>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    components: { VueSlickCarousel },
    data: () => ({
        dialog: false,
        infPosGrados:[],
        information: [
            {id:'1', icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {id:'2', icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {id:'3', icon:'/BannerPc.jpg',type:'Ma',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {id:'4', icon:'/BannerPc.jpg',type:'Ma',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {id:'5', icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {id:'6', icon:'/BannerPc.jpg',type:'Doc',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {id:'7', icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {id:'8', icon:'/BannerPc.jpg',type:'Doc',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {id:'6', icon:'/BannerPc.jpg',type:'Doc',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {id:'7', icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {id:'8', icon:'/BannerPc.jpg',type:'Doc',title:'Especialización en', name:'Gestión de Proyectos', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},  
        ],
        Pensum:[
            {title:'Semestre 1',materia:'materia',credit:' 10 creditos'},
            {title:'Semestre 1',materia:'materia',credit:' 10 creditos'},
            {title:'Semestre 1',materia:'materia',credit:' 10 creditos'},
            {title:'Semestre 1',materia:'materia',credit:' 10 creditos'},
            {title:'Semestre 1',materia:'materia',credit:' 10 creditos'},
            {title:'Semestre 1',materia:'materia',credit:' 10 creditos'},
        ],
        settings:{
                "autoplay": true,
                "infinite": true,
                "autoplaySpeed": 4000,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "responsive": [
                    {
                    "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 4,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true,
                            "arrows":true
                        }
                    },
                    {
                    "breakpoint": 414,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots":false,
                            "arrows":false
                        }
                    },
                    {
                    "breakpoint": 768,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": false,
                            "arrows":false
                        }
                    }
                ]
            },
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
        }
    }
  }
</script>
