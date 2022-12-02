<template>
   <v-container fluid class="pt-10 pb-10">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="titles">Nuestros Posgrados</h3>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="12" md="10" lg="8" sm="12">
                <v-row justify="center" align="center"> 
                    <v-col cols="4" sm="3" justify="center" align="center">
                      <v-select
                          :items="Especializacion"
                          label="Especializacion"
                          outlined
                          dense
                      ></v-select>
                    </v-col>
                    <v-col cols="4" sm="3" justify="center" align="center">
                      <v-select
                          :items="Maestrias"
                          label="Maestrias"
                          outlined
                          dense
                      ></v-select>
                    </v-col>
                    <v-col cols="4" sm="3" justify="center" align="center">
                        <v-select
                          :items="Doctorado"
                          label="Doctorado"
                          outlined
                          dense
                      ></v-select>
                    </v-col>
                </v-row>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-col justify="center" align="center"  cols="12" md="10" lg="10" sm="12">
                <v-row justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" lg="3" md="3" sm="12" v-for="({icon, title, desc}, index) in information" :key="index">
                        <v-card justify="center" align="center" >
                            <div>
                                <img :src="icon" class="FotoPostGrado" alt="">
                            </div>
                            <div class="pa-5">
                                <div>
                                    <p class="Text-About">{{title}}</p>
                                </div>
                                <div >
                                   <p class="Text-Description">{{desc}}</p> 
                                </div>
                                <v-btn class="ma-2" @click="dialog == !dialog">
                                    Ver Pensum
                                </v-btn>
                            </div>
                        </v-card>
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
        dialog: true,
        readonly: false,
        Especializacion: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        Maestrias: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        Doctorado: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        information: [
            {icon:'/BannerPc.jpg',title:'Lorem', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',title:'Lorem', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',title:'Lorem', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',title:'Lorem', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',title:'Lorem', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',title:'Lorem', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',title:'Lorem', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/BannerPc.jpg',title:'Lorem', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'}, 
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
  }
</script>
