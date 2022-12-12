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
          <v-row justify="center" align="start">
            <v-col   align="center"  cols="12" md="11" lg="10" sm="12">
                <v-row  align="center">
                    <v-col  align="center" cols="12" lg="3" md="4" sm="12" v-for="(inf, index) in information" :key="index">
                        <div align="center" class="ma-5">
                            <div>
                                <v-img :src="inf.icon" class="FotoPostGrado" alt="">
                                    <div  align="start" class="contentPost ml-2 Text-PostGrado">
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
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Gestión ambiental sostenible', desc:'Perfil de ingreso: Dirigido a profesionales de todos los campos, que quieran ampliar sus conocimientos en Gestión Ambiental Sostenible'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Ingeniería de software', desc:'Está dirigida a profesionales que deseen profundizar en la gestión y desarrollo de software bajo criterios de calidad.'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Salud familiar', desc:'Profesionales en las áreas de: Ciencias salud: medicina, enfermería, odontología, nutrición y profesiones afines, ciencias Sociales: psicología, trabajo Social, sociología o ciencias humanas: Pedagogía Infantil y profesionales afines'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Producción agrícola tropical sostenible', desc:'Profesionales del sector agropecuario, recursos naturales, ciencias biológicas, ambientales, administrativas agropecuarias y áreas afines al sector de la producción agraria.'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Gestión de Proyectos', desc:'Profesionales de todas las disciplinas, que tengan interés en el conocimiento, propuesta, desarrollo y Gestión de Proyectos de Inversión, Económica, Social, entre otros, con conocimientos básicos en inglés.'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'RF y sistemas radar', desc:', en áreas relacionadas con la ingeniería, especialmente Telecomunicaciones, Electrónica, Mecatrónica, Eléctrica y con conocimientos en: electromagnetismo, señales y sistemas, sistemas de telecomunicaciones y fundamentos de programación de computadores.'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Instrumentación y control industrial', desc:'está dirigida a profesionales en áreas relacionadas con la ingeniería, especialmente Electrónica, Electromecánica, Eléctrica, Mecánica, Control e Instrumentación y demás ingenieros '},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Administración en salud', desc:'Profesionales de diferentes disciplinas, que estén vinculados u orientados a desarrollar funciones administrativas o como asesores de proyectos'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Epidemiología', desc:'está dirigida a profesionales con formación en las siguientes áreas: *Ciencias de la Salud: Medicina, enfermería, odontología, bacteriología, nutrición, terapias y profesiones afines.'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Seguridad y salud en el trabajo', desc:', está dirigida a profesionales de todas las áreas del conocimiento; los aspirantes al programa deben evidenciar interés de promover la gestión de actividades en promoción y prevención en atención de la seguridad y salud en el trabajo'},
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Acción motriz', desc:'experto con capacidad para diseñar y aplicar programas de intervención de Acción Motriz con una formación científica y pedagógica que le permite a su vez responder a las necesidades sociales del contexto educativo escolar'},  
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Acuicultura aguas continentales', desc:'Título profesional relacionado con el área de las ciencias agrarias o áreas afines (biología, biología marina, ingeniería pesquera, ingeniería agronómica, medicina veterinaria, zootecnia, medicina veterinaria y zootecnia, ciencias agropecuarias, ingeniería agroindustrial, etc.)'},  
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Administración de negocios', desc:'es un experto en el manejo de modelos y herramientas pertinentes para la toma de decisiones y la gestión en los negocios.'},  
            {icon:'/BannerPc.jpg',type:'Es',title:'Especialización en', name:'Gestión de la calidad', desc:'Facultad de Ciencias Económicas de la Universidad de los Llanos, se enmarcan como los parámetros que permiten el desarrollo de las competencias cognitivas, praxiológicas, comunicativas y actitudinales de los profesionales que en su rol de estudiantes requieren para profundizar en temáticas propias de la gestión de la calidad'},  
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Gestión ambiental sostenible', desc:'El programa está dirigido a todos los profesionales interesados en profundizar y desarrollar conocimientos en gestión ambiental sostenible, con capacidad propositiva, liderazgo, convicciones éticas y disposición al trabajo interdisciplinar y en equipo.'},  
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Sistemas sostenibles de salud- producción animal tropical', desc:'Profesionales del área de las ciencias agrícolas y pecuarias, ciencias biológicas y ciencias naturales.'},  
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Acuicultura', desc:'El aspirante a formarse como magíster en acuicultura debe poseer y reflejar en su diario vivir, el siguiente perfil personal: interés por la naturaleza, aprecio por la vida natural, conocimiento práctico de la convivencia natural y preceptiva del cuidado medioambienta'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Producción tropical sostenible', desc:'Profesionales de las ciencias agrarias, biológicas, ambientales, administrativas agropecuarias y demás profesiones relacionadas con el sector de la producción agraria.'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Estudios de desarrollo local', desc:'Profesionales en diversas disciplinas y áreas del conocimiento con experiencia de trabajo en cualquier área vinculada al desarrollo desde instituciones públicas, civiles o privadas'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Estudios culturales', desc:'Profesional en cualquier disciplina social o humanística y egresados de cualquier campo del conocimiento interesado en generar procesos de transformación de la realidad social y política'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Epidemiología', desc:'-	Contar con formación de grado en algunas de las siguientes disciplinas: Ciencias de la Salud y/o ciencias biomédicas: Medicina, Enfermería, Odontología, Bacteriología, Nutrición...'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Educación', desc:'convoca a docentes y a profesionales vinculados a la educación interesados en recibir formación posgradual y de profundización en los campos del saber educativo y pedagógico, la docencia universitaria'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Administración de negocios', desc:'El especialista en administración de negocios de la universidad de los llanos es un experto en el manejo de modelos y herramientas pertinentes para la toma de decisiones y la gestión en los negocios.'},          
            {icon:'/BannerPc.jpg',type:'Ma',title:'Maestría en', name:'Seguridad y salud en el trabajo', desc:'está dirigida a profesionales de todas las áreas del conocimiento, con interés centrado en el desarrollo de la seguridad y salud en el trabajo de manera directa o indirecta en su gestión profesional o empresarial.'},          
            {icon:'/BannerPc.jpg',type:'Doc',title:'Doctorado en', name:'Ciencias agrarias', desc:': El egresado del Doctorado en Ciencias Agrarias de la Universidad de los Llanos es un científico de alto nivel, entrenado y capacitado para asumir el compromiso de la ciencia con autonomía, responsabilidad, ética e idoneidad, con altas competencias para la investigación'},          
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
