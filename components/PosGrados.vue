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
                        >Maestr??as
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
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/GestionAmbientalSostenible.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Gesti??n Ambiental Sostenible', 
                desc:'Aplica la sostenibilidad a contextos naturales para orientar a las comunidades locales hacia modelos de desarrollo globalizados.',
                pdf:'/PdfPosgrados/Especializaciones/01.Gestion_ambiental_sostenible.pdf'
            },
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/IngenieriadeSoftware.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Ingenier??a de Software', 
                desc:'Lidera, gestiona y ejecuta procesos de construcci??n y adaptaci??n de software para las organizaciones. ',
                pdf:'/PdfPosgrados/Especializaciones/02.Ingenieria_de_software.pdf'
            },
            {
                margen:'',
                icon:'/posgrados/AdministraciondeNegocios.jpg',
                type:'Ma',
                title:'Maestr??a en', 
                name:'Administraci??n de Negocios', 
                desc:'Pretende consolidar la comprensi??n de la teor??a de la administraci??n y su aplicaci??n al desarrollo empresarial en la realidad econ??mica y social.',
                pdf:'/PdfPosgrados/Maestrias/Administraciondenegociospdf.pdf'
            },          
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/SeguridadySaludenelTrabajoMa.jpg',
                type:'Ma',
                title:'Maestr??a en', 
                name:'Seguridad y Salud en el Trabajo', 
                desc:'Desarrolla la seguridad y salud en el trabajo de manera directa o indirecta en su gesti??n profesional o empresarial.',
                pdf:'/PdfPosgrados/Maestrias/Seguridadysaludeneltrabajopdf.pdf'
            },          
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/CienciasAgrarias.jpg',
                type:'Doc',
                title:'Doctorado en', 
                name:'Ciencias Agrarias', 
                desc:'Asume el compromiso de la ciencia con autonom??a, responsabilidad, ??tica e idoneidad para la investigaci??n, la docencia y el conocimiento.',
                pdf:'/PdfPosgrados/Doctorados/Doctoradoencienciasagrarias.pdf'
            },          
            {
                margen:'mt-lg-6',
                icon:'/posgrados/SaludFamiliar.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Salud Familiar', 
                desc:'Gestiona y direcciona organizaciones de la Salud, experto en la toma de decisiones coherentes con la demanda de la poblaci??n y los recursos disponibles.',
                pdf:'/PdfPosgrados/Especializaciones/04.Salud_familiar_y_comunitaria.pdf'
            },
            {
                margen:'',
                icon:'/posgrados/ProduccionAgricolatropicalSostenible.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Producci??n Agr??cola Tropical Sostenible', 
                desc:'Fortalece el desarrollo de la producci??n agr??cola y pecuaria del pa??s, haciendo uso estrat??gico de las condiciones tropicales, mediante el desarrollo de sistemas productivos arm??nicos.',
                pdf:'/PdfPosgrados/Especializaciones/15.Produccion_agricola_tropical_sostenible.pdf'
            },
            {
                margen:'',
                icon:'/posgrados/GestiondeProyectos.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Gesti??n de Proyectos', 
                desc:'Profesionales con inter??s en el conocimiento, propuesta, desarrollo y Gesti??n de Proyectos de Inversi??n, Econ??mica, Social, entre otros, con conocimientos b??sicos en ingl??s.',
                pdf:'/PdfPosgrados/Especializaciones/12.Gestion_de_proyectos.pdf'
            },
            {
                margen:'',
                icon:'/posgrados/SistemasRadar.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Sensores RF y Sistemas Radar', 
                desc:'Se desempe??en en el ??mbito civil o militar, en ??reas relacionadas con la ingenier??a, especialmente Telecomunicaciones, Electr??nica, Mecatr??nica y El??ctrica.',
                pdf:'/PdfPosgrados/Especializaciones/14.Sensores_de_rf_y_sistemas_radar.pdf'
            },
            {
                margen:'',
                icon:'/posgrados/Finanzas.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Finanzas', 
                desc:'Propone alternativas financieras a las empresas en su ejercicio profesional, conscientes de la responsabilidad social que implica el manejo de la informaci??n financiera en los negocios.',
                pdf:'/PdfPosgrados/Especializaciones/07.Finanzas.pdf'
            },
            {
                margen:'',
                icon:'/posgrados/InstrumentacionyControlIndustrial.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Instrumentaci??n y Control Industrial', 
                desc:'Desarrolla las habilidades y destrezas en el manejo de los principios f??sicos, modelamiento matem??tico de procesos industriales y cient??ficos en el ??rea de la automatizaci??n.',
                pdf:'/PdfPosgrados/Especializaciones/03.Instrumentacion_y_control_industrial.pdf'
            },
            {
                margen:'',
                icon:'/posgrados/GestionAmbientalSostenibleMa.jpg',
                type:'Ma',
                title:'Maestr??a en', 
                name:'Gesti??n Ambiental Sostenible', 
                desc:'Profundiza y desarrolla conocimientos en gesti??n ambiental sostenible, con capacidad propositiva, liderazgo, convicciones ??ticas y disposici??n al trabajo interdisciplinar y en equipo.',
                pdf:'/PdfPosgrados/Maestrias/GestionAmbientalpdf.pdf'
            },  
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/SistemasSosteniblesdeSalud-ProduccionAnimalTropicalma.jpg',
                type:'Ma',
                title:'Maestr??a en', 
                name:'Sistemas Sostenibles de Salud - Producci??n Animal Tropical',
                desc:'Profundiza el ??rea de las ciencias agr??colas y pecuarias, ciencias biol??gicas y ciencias naturales con conocimientos en agronom??a.',
                pdf:'/PdfPosgrados/Maestrias/Sistemassosteniblesdesalud_produccionanimaltropicalpdf.pdf'
            },  
            {
                margen:'mt-lg-8',
                icon:'/posgrados/Acuicultura.jpg',
                type:'Ma',
                title:'Maestr??a en', 
                name:'Acuicultura', 
                desc:'Forma investigadores aut??nomos y cr??ticos que puedan aportarle al desarrollo de la actividad acu??cola a trav??s de la investigaci??n y la proyecci??n social.',
                pdf:'/PdfPosgrados/Maestrias/Acuiculturapdf.pdf'
            },          
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/AcuiculturaAguasContinentalesEs1.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Acuicultura Aguas Continentales', 
                desc:'Permita promover el desarrollo de la actividad utilizando racional y competitivamente los recursos existentes.',
                pdf:'/PdfPosgrados/Especializaciones/10.Acuicultura_aguas_continentales.pdf'
            },  
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/AdministracionedeNegociosEs.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Administraci??n de Negocios', 
                desc:'Experto en el manejo de modelos y herramientas pertinentes para la toma de decisiones y la gesti??n en los negocios.',
                pdf:'/PdfPosgrados/Especializaciones/11.Administracion_de_negocios.pdf'},  
            {
                margen:'',
                icon:'/posgrados/GestiondelaCalidad.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Gesti??n de la Calidad', 
                desc:'Comprende los sistemas de gesti??n en el entorno empresarial. Mide, valora y aplica acciones correctivas que permitan el alcance de las pol??ticas y objetivos de calidad propuestos.',
                pdf:'/PdfPosgrados/Especializaciones/13.Gestion_de_calidad.pdf'
            },  
            {
                margen:'',
                icon:'/posgrados/ProduccionTropicalSostenible.jpg',
                type:'Ma',
                title:'Maestr??a en', 
                name:'Producci??n Tropical Sostenible', 
                desc:'Forma conocimientos en las ciencias agrarias, biol??gicas, ambientales, administrativas agropecuarias y dem??s profesiones relacionadas con el sector de la producci??n agraria.',
                pdf:'/PdfPosgrados/Maestrias/Producciontropicalsosteniblepdf.pdf'
            },          
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/EstudiosdeDesarrolloLocalMa.jpg',
                type:'Ma',
                title:'Maestr??a en', 
                name:'Estudios de Desarrollo Local', 
                desc:'Profesionales en diversas disciplinas y ??reas del conocimiento con experiencia de trabajo en cualquier ??rea vinculada al desarrollo desde instituciones p??blicas, civiles o privadas',
                pdf:'/PdfPosgrados/Maestrias/Estudiosdedesarrollolocalpdf.pdf'
            },          
            {
                margen:'mt-xl-12 mt-lg-12' ,
                icon:'/posgrados/EstudiosCulturalesMa.jpg',
                type:'Ma',
                title:'Maestr??a en', 
                name:'Estudios Culturales', 
                desc:'Generar procesos de transformaci??n de la realidad social y pol??tica, con bases s??lidas en procesos investigaci??n y acci??n.',
                pdf:'/PdfPosgrados/Maestrias/Estudiosculturalespdf.pdf'
            },          
            {
                margen:'mt-lg-7',
                icon:'/posgrados/EpidemiologiaMa.jpg',
                type:'Ma',
                title:'Maestr??a en', 
                name:'Epidemiolog??a', 
                desc:'Genera evidencia cient??fica a partir de la aplicaci??n del m??todo epidemiol??gico en el manejo de situaciones en el ??mbito de salud y enfermedades para la integraci??n de conocimientos, habilidades y t??cnicas.',
                pdf:'/PdfPosgrados/Maestrias/Epidemiologiapdf.pdf'
            },          
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/Educacion.jpg',
                type:'Ma',
                title:'Maestr??a en', 
                name:'Educaci??n', 
                desc:'Construye un pensamiento educativo y pedag??gico, que refleje la identidad de la regi??n de la Orinoqu??a Colombiana.',
                pdf:'/PdfPosgrados/Maestrias/Educacionpdf.pdf'
            },          
            {
                margen:'mt-lg-8',
                icon:'/posgrados/AdministracionenSalud1.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Administraci??n en Salud', 
                desc:'Desarrolla el sistema de seguridad social integral, con principios, valores ??ticos y morales; basados en el humanismo y respeto de la dignidad humana.',
                pdf:'/PdfPosgrados/Especializaciones/05.Administracion_en_salud.pdf'
            },
            {
                margen:'mt-xl-8 mt-lg-10',
                icon:'/posgrados/EpidemiologiaEs.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Epidemiolog??a', 
                desc:'Marca la ruta, estrategia y lineamientos para mitigar enfermedades y poder solventarlas de la mejor manera.',
                pdf:'/PdfPosgrados/Especializaciones/06.Epidemiologia.pdf'
            },
            {
                margen:'',
                icon:'/posgrados/SeguridadySaludenelTrabajoEs.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Seguridad y Salud en el Trabajo', 
                desc:'Implementa pol??ticas y estrategias para el mejoramiento de las condiciones de salud laboral de las personas, enmarcadas en la alineaci??n din??mica de los procesos de gesti??n humana.',
                pdf:'/PdfPosgrados/Especializaciones/08.Seguridad_y_salud_en_el_trabajo.pdf'
            },
            {
                margen:'mt-xl-8 mt-lg-8',
                icon:'/posgrados/AccionMotriz.jpg',
                type:'Es',
                title:'Especializaci??n en', 
                name:'Acci??n Motriz', 
                desc:'Permite a su vez responder a las necesidades sociales del contexto educativo escolar, art??stico, deportivo y de la salud de la regi??n.',
                pdf:'/PdfPosgrados/Especializaciones/09.Accion_motriz.pdf'
            },  
            {
                margen:'mt-lg-8',
                icon:'/posgrados/SaludFamiliaryComunitaria.jpg',
                type:'Ma',
                title:'Maestr??a en', 
                name:'Salud Familiar y Comunitaria', 
                desc:'Forma investigadores con valores y principios ??ticos y fundamentaci??n te??rica, epistemol??gica y metodol??gica desde las Ciencias Sociales y de Salud.',
                pdf:'/PdfPosgrados/Maestrias/Saludfamiliarycomunitariapdf.pdf'
            },  
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
