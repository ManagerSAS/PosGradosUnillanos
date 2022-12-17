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
                    <v-col cols="12" md="3" sm="3" justify="center" align="center">
                      <v-btn
                        block
                        height="30px"
                        width="110px"
                        hide-details
                        class="text-capitalize font-weight-thin"
                        style="border-radius:0; background-color: #1a212f; color: white;" 
                        @click="all()"
                      >Todos <span class="text-lowercase"> &nbsp;los&nbsp;</span>  Posgrados</v-btn>
                    </v-col>
                    <v-col cols="12" md="3" sm="3" justify="center" align="center">
                      <v-btn
                        block
                        hide-details
                        height="30px"
                        width="110px"
                        class="text-capitalize font-weight-thin"
                        style="border-radius:0; background-color: #1a212f; color: white;"
                        @click="filter('Es')"
                      >Especializaciones</v-btn>
                    </v-col>
                    <v-col cols="12" md="3" sm="3" justify="center" align="center">
                        <v-btn
                            block
                            height="30px"
                            width="110px"
                            style="border-radius:0; background-color: #1a212f; color: white;"
                            hide-details
                            class="text-capitalize font-weight-thin"
                            @click="filter('Ma')"
                        >Maestrías
                        </v-btn>
                    </v-col>
                    <v-col cols="12" md="3" sm="3" justify="center" align="center">
                        <v-btn
                            height="30px"
                            width="110px"
                            block
                            hide-details
                            class="text-capitalize font-weight-thin"
                            @click="filter('Doc')"
                            style="border-radius:0; background-color: #1a212f; color: white;"
                        >Doctorado</v-btn>
                    </v-col>
                </v-row>
            </v-col>
          </v-row>
          <v-row justify="center" align="start">
            <v-col   align="center"  cols="12" md="11" lg="11" xl="9" sm="12">
                <v-row  align="center">
                    <v-col  align-self="start" cols="12" lg="4" md="4" sm="12" v-for="(inf, index) in information" :key="index">
                        <div  class="ma-2">
                            <div>
                                <v-img :src="inf.icon" class="FotoPostGrado" alt="">
                                    <div class="overlayPosgrados"></div>
                                    <div  align="start" class="contentPost ml-2 Text-PostGrado">
                                        <div>
                                            <h4 class="Postgrado">{{inf.title}}</h4>
                                        </div>
                                        <div >
                                            <h4 class="namePosgrado">{{inf.name }}</h4 >
                                        </div>
                                    </div>    
                                </v-img>
                            </div>
                            <div align="start" class="mt-2 mb-2">
                                <p class="Text-Description">{{inf.desc}}</p> 
                            </div>
                            <div :class="inf.margen">
                                <v-btn  hide-details style="border-radius:0;" target="_blanck" :href="inf.pdf"  width="200px" height="30px" color="#fbb03b" outlined dense >
                                    Descargar PDF
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
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    components: { VueSlickCarousel },
    data: () => ({
        dialog: false,
        infPosGrados:[],
        information: [
            // {
            //     margen:'mt-xl-8 mt-lg-8',
            //     icon:'/posgrados/GestionAmbientalSostenible.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Gestión Ambiental Sostenible', 
            //     desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},
            // {
            //     margen:'mt-xl-8 mt-lg-8',
            //     icon:'/posgrados/IngenieriadeSoftware.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Ingeniería de Software', 
            //     desc:'Lidera, gestiona y ejecuta procesos de construcción y adaptación de software para las organizaciones. ',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},
            // {
            //     margen:'',
            //     icon:'/posgrados/AdministraciondeNegocios.jpg',
            //     type:'Ma',
            //     title:'Maestría en', 
            //     name:'Administración de Negocios', 
            //     desc:'Pretende consolidar la comprensión de la teoría de la administración y su aplicación al desarrollo empresarial en la realidad económica y social.',
            //     pdf:'/PdfPosgrado/Maestrias/.pdf'},          
            // {
            //     margen:'mt-xl-8 mt-lg-8',
            //     icon:'/posgrados/SeguridadySaludenelTrabajoMa.jpg',
            //     type:'Ma',
            //     title:'Maestría en', 
            //     name:'Seguridad y Salud en el Trabajo', 
            //     desc:'Desarrolla la seguridad y salud en el trabajo de manera directa o indirecta en su gestión profesional o empresarial.',
            //     pdf:'/PdfPosgrado/Maestrias/.pdf'},          
            // {
            //     margen:'mt-xl-8 mt-lg-8',
            //     icon:'/posgrados/CienciasAgrarias.jpg',
            //     type:'Doc',
            //     title:'Doctorado en', 
            //     name:'Ciencias Agrarias', 
            //     desc:'Asume el compromiso de la ciencia con autonomía, responsabilidad, ética e idoneidad para la investigación, la docencia y el conocimiento.',
            //     pdf:'/PdfPosgrado/Doctorados/.pdf'},          
            // {
            //     margen:'mt-lg-6',
            //     icon:'/posgrados/SaludFamiliar.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Salud Familiar', 
            //     desc:'Gestiona y direcciona organizaciones de la Salud, experto en la toma de decisiones coherentes con la demanda de la población y los recursos disponibles.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},
            // {
            //     margen:'',
            //     icon:'/posgrados/ProduccionAgricolatropicalSostenible.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Producción Agrícola Tropical Sostenible', 
            //     desc:'Fortalece el desarrollo de la producción agrícola y pecuaria del país, haciendo uso estratégico de las condiciones tropicales, mediante el desarrollo de sistemas productivos armónicos.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},
            // {
            //     margen:'',
            //     icon:'/posgrados/GestiondeProyectos.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Gestión de Proyectos', 
            //     desc:'Profesionales con interés en el conocimiento, propuesta, desarrollo y Gestión de Proyectos de Inversión, Económica, Social, entre otros, con conocimientos básicos en inglés.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},
            // {
            //     margen:'',
            //     icon:'/posgrados/SistemasRadar.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'RF y Sistemas Radar', 
            //     desc:'Se desempeñen en el ámbito civil o militar, en áreas relacionadas con la ingeniería, especialmente Telecomunicaciones, Electrónica, Mecatrónica y Eléctrica.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},
            // {
            //     margen:'',
            //     icon:'/posgrados/Finanzas.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Finanzas', 
            //     desc:'Propone alternativas financieras a las empresas en su ejercicio profesional, conscientes de la responsabilidad social que implica el manejo de la información financiera en los negocios.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},
            // {
            //     margen:'',
            //     icon:'/posgrados/InstrumentacionyControlIndustrial.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Instrumentación y Control Industrial', 
            //     desc:'Desarrolla las habilidades y destrezas en el manejo de los principios físicos, modelamiento matemático de procesos industriales y científicos en el área de la automatización.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},
            // {
            //     margen:'',
            //     icon:'/posgrados/GestionAmbientalSostenibleMa.jpg',
            //     type:'Ma',
            //     title:'Maestría en', 
            //     name:'Gestión Ambiental Sostenible', 
            //     desc:'Profundiza y desarrolla conocimientos en gestión ambiental sostenible, con capacidad propositiva, liderazgo, convicciones éticas y disposición al trabajo interdisciplinar y en equipo.',
            //     pdf:'/PdfPosgrado/Maestrias/.pdf'},  
            // {
            //     margen:'mt-xl-8 mt-lg-8',
            //     icon:'/posgrados/SistemasSosteniblesdeSalud-ProduccionAnimalTropicalma.jpg',
            //     type:'Ma',
            //     title:'Maestría en', 
            //     name:'Sistemas Sostenibles de Salud - Producción Animal Tropical',
            //     desc:'Profundiza el área de las ciencias agrícolas y pecuarias, ciencias biológicas y ciencias naturales con conocimientos en agronomía.',
            //     pdf:'/PdfPosgrado/Maestrias/.pdf'},  
            // {
            //     margen:'mt-lg-8',
            //     icon:'/posgrados/Acuicultura.jpg',
            //     type:'Ma',
            //     title:'Maestría en', 
            //     name:'Acuicultura', 
            //     desc:'Forma investigadores autónomos y críticos que puedan aportarle al desarrollo de la actividad acuícola a través de la investigación y la proyección social.',
            //     pdf:'/PdfPosgrado/Maestrias/.pdf'},          
            // {
            //     margen:'mt-xl-8 mt-lg-8',
            //     icon:'/posgrados/AcuiculturaAguasContinentalesEs1.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Acuicultura Aguas Continentales', 
            //     desc:'Permita promover el desarrollo de la actividad utilizando racional y competitivamente los recursos existentes.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'
            // },  
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/AdministraciondeNegocios.jpg',
                type:'Es',
                title:'Especialización en', 
                name:'Administración de Negocios', 
                desc:'Experto en el manejo de modelos y herramientas pertinentes para la toma de decisiones y la gestión en los negocios.',
                pdf:'/PdfPosgrados/Especializaciones/EsAdminstracion_de_negocios.pdf'},  
            // {
            //     margen:'',
            //     icon:'/posgrados/GestiondelaCalidad.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Gestión de la Calidad', 
            //     desc:'Comprende los sistemas de gestión en el entorno empresarial. Mide, valora y aplica acciones correctivas que permitan el alcance de las políticas y objetivos de calidad propuestos.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'
            // },  
            // {
            //     margen:'',
            //     icon:'/posgrados/ProduccionTropicalSostenible.jpg',
            //     type:'Ma',
            //     title:'Maestría en', 
            //     name:'Producción Tropical Sostenible', 
            //     desc:'Forma conocimientos en las ciencias agrarias, biológicas, ambientales, administrativas agropecuarias y demás profesiones relacionadas con el sector de la producción agraria.',
            //     pdf:'/PdfPosgrado/Maestrias/.pdf'
            // },          
            // {
            //     margen:'mt-xl-8 mt-lg-8',
            //     icon:'/posgrados/EstudiosdeDesarrolloLocalMa.jpg',
            //     type:'Ma',
            //     title:'Maestría en', 
            //     name:'Estudios de Desarrollo Local', 
            //     desc:'Profesionales en diversas disciplinas y áreas del conocimiento con experiencia de trabajo en cualquier área vinculada al desarrollo desde instituciones públicas, civiles o privadas',
            //     pdf:'/PdfPosgrado/Maestrias/.pdf'
            // },          
            // {
            //     margen:'mt-xl-12 mt-lg-12' ,
            //     icon:'/posgrados/EstudiosCulturalesMa.jpg',
            //     type:'Ma',
            //     title:'Maestría en', 
            //     name:'Estudios Culturales', 
            //     desc:'Generar procesos de transformación de la realidad social y política, con bases sólidas en procesos investigación y acción.',
            //     pdf:'/PdfPosgrado/Maestrias/.pdf'},          
            // {
            //     margen:'mt-lg-7',
            //     icon:'/posgrados/EpidemiologiaMa.jpg',
            //     type:'Ma',
            //     title:'Maestría en', 
            //     name:'Epidemiología', 
            //     desc:'Genera evidencia científica a partir de la aplicación del método epidemiológico en el manejo de situaciones en el ámbito de salud y enfermedades para la integración de conocimientos, habilidades y técnicas.',
            //     pdf:'/PdfPosgrado/Maestrias/.pdf'},          
            // {
            //     margen:'mt-xl-8 mt-lg-8',
            //     icon:'/posgrados/Educacion.jpg',
            //     type:'Ma',
            //     title:'Maestría en', 
            //     name:'Educación', 
            //     desc:'Construye un pensamiento educativo y pedagógico, que refleje la identidad de la región de la Orinoquía Colombiana.',
            //     pdf:'/PdfPosgrado/Maestrias/.pdf'},          
            // {
            //     margen:'mt-lg-8',
            //     icon:'/posgrados/AdministracionenSalud1.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Administración en Salud', 
            //     desc:'Desarrolla el sistema de seguridad social integral, con principios, valores éticos y morales; basados en el humanismo y respeto de la dignidad humana.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},
            // {
            //     margen:'mt-xl-8 mt-lg-10',
            //     icon:'/posgrados/EpidemiologiaEs.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Epidemiología', 
            //     desc:'Marca la ruta, estrategia y lineamientos para mitigar enfermedades y poder solventarlas de la mejor manera.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},
            // {
            //     margen:'',
            //     icon:'/posgrados/SeguridadySaludenelTrabajoEs.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Seguridad y Salud en el Trabajo', 
            //     desc:'Implementa políticas y estrategias para el mejoramiento de las condiciones de salud laboral de las personas, enmarcadas en la alineación dinámica de los procesos de gestión humana.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},
            // {
            //     margen:'mt-xl-8 mt-lg-8',
            //     icon:'/posgrados/AccionMotriz.jpg',
            //     type:'Es',
            //     title:'Especialización en', 
            //     name:'Acción Motriz', 
            //     desc:'Permite a su vez responder a las necesidades sociales del contexto educativo escolar, artístico, deportivo y de la salud de la región.',
            //     pdf:'/PdfPosgrado/Especializaciones.pdf'},  
            // {
            //     margen:'mt-lg-8',
            //     icon:'/posgrados/SaludFamiliaryComunitaria.jpg',
            //     type:'Es',
            //     title:'Maestría en', 
            //     name:'Salud Familiar y Comunitaria', 
            //     desc:'Forma investigadores con valores y principios éticos y fundamentación teórica, epistemológica y metodológica desde las Ciencias Sociales y de Salud.',
            //     pdf:'/PdfPosgrado/Maestrias/.pdf'},  
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
