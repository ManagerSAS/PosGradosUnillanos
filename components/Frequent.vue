<template>
  <v-container fluid class="pt-10">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="titles">Preguntas Frecuentes</h3>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-5">
            <v-col cols="12" lg="7" xl="7" md="10" sm="10">
                <div v-for="({pregunta,respuesta},index) in preguntas"
                        :key="index">
                    <p class="question">{{pregunta}}</p>
                    <p class="response">{{respuesta}}</p>
                </div>
               
            </v-col>
        </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
        readonly: false,
            preguntas: [
                {pregunta:'1. ¿Cuánto cuesta la inscripción?', respuesta:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quidem a qui eum laudantium voluptatibus harum eaque reiciendis iusto. Laborum impedit provident repudiandae totam quam itaque recusandae, doloribus vel eos!'},
                {pregunta:'2. ¿Cuáles son los requisitos?', respuesta:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quidem a qui eum laudantium voluptatibus harum eaque reiciendis iusto. Laborum impedit provident repudiandae totam quam itaque recusandae, doloribus vel eos!'},
                {pregunta:'3. ¿Cómo puedo financiar mi posgrado?', respuesta:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quidem a qui eum laudantium voluptatibus harum eaque reiciendis iusto. Laborum impedit provident repudiandae totam quam itaque recusandae, doloribus vel eos!'},
                {pregunta:'4. ¿Cuáles son los requisitos? ', respuesta:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quidem a qui eum laudantium voluptatibus harum eaque reiciendis iusto. Laborum impedit provident repudiandae totam quam itaque recusandae, doloribus vel eos!'},
            ],
    }),
  }
</script>
