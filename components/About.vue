<template>
  <v-container fluid id="featured" class="pt-15 pb-15 font-gotham">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="titles ">¿POR QUÉ HACER MIS POSGRADO <br> <span class="font-weight-light" >EN UNILLANOS?</span> </h3>
                <div class="linea"></div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center"  cols="12" md="11" lg="9" sm="12">
                <v-row  justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" lg="4" md="4" sm="12" v-for="({icon, desc}, index) in information" :key="index">
                        <div justify="center" align="center" style="border-radius:0; background-color:#e6e6e6" class="contenCard pr-5 pl-5">
                            <div class="pt-10 pb-5">
                                <img :src="icon" class="IconAbaot" alt="">
                            </div>
                            <div>
                               <p class="Text-Description" style="text-overflow: ellipsis;">{{desc}}</p> 
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
            {icon:'/certified1.png', desc:'“Somos una universidad que se reconoce, se autoevalúa y trabaja con calidad” El Ministerio de Educación Nacional, mediante Resolución número 5310 del 8 de abril de 2022, otorgó la Acreditación Institucional en Alta Calidad a la Universidad de los Llanos, un logro que se alcanza después de varios años de trabajo, esfuerzo y compromiso por parte directivos, docentes, estudiantes y toda comunidad universitaria.'},
            {icon:'/user.png', desc:'Contamos con toda la administración, cuerpo docente, personal administrativo y toda la comunidad unillanista, por seguir mejorando los procesos que conlleven a alcanzar una oferta académica de calidad para la Orinoquia. '},
            {icon:'/certified2.png', desc:'Tenemos calidad en docentes de investigación con proyectos de alto impacto social en cada facultad a su vez excelencia académica en procesos de cualificación a nivel de maestría o doctorado.'},
        ],
    }),
  }
</script>
