<template>
  <v-container fluid class="pt-10 pb-10">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="titles ">PREGUNTAS<br> <span class="font-weight-light" >FRECUENTES</span></h3>
                <div class="linea"></div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-5">
            <v-col cols="12" lg="7" xl="7" md="10" sm="10">
                <v-expansion-panels >
                    <v-expansion-panel 
                        accordion 
                        height="200"
                        v-for="({pregunta,respuesta},index) in preguntas"
                        :key="index"
                        class="text-blue-f-1em">
                        <v-expansion-panel-header style="color:#003B4C;" >{{pregunta}}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{respuesta}}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
               
            </v-col>
        </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
            preguntas: [
                {pregunta:'1. ¿Cuánto cuesta la inscripción?', respuesta:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quidem a qui eum laudantium voluptatibus harum eaque reiciendis iusto. Laborum impedit provident repudiandae totam quam itaque recusandae, doloribus vel eos!'},
                {pregunta:'2. ¿Cuáles son los requisitos?', respuesta:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quidem a qui eum laudantium voluptatibus harum eaque reiciendis iusto. Laborum impedit provident repudiandae totam quam itaque recusandae, doloribus vel eos!'},
                {pregunta:'3. ¿Cómo puedo financiar mi posgrado?', respuesta:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quidem a qui eum laudantium voluptatibus harum eaque reiciendis iusto. Laborum impedit provident repudiandae totam quam itaque recusandae, doloribus vel eos!'},
                {pregunta:'4. ¿Cuáles son los requisitos? ', respuesta:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quidem a qui eum laudantium voluptatibus harum eaque reiciendis iusto. Laborum impedit provident repudiandae totam quam itaque recusandae, doloribus vel eos!'},
            ],
    }),
  }
</script>
