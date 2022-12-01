<template>
  <v-container fluid class="pt-10">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="titles">¿Porqué hacer mi posgrado en Unillanos?</h3>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center"  cols="12" md="10" lg="8" sm="12">
                <v-row class="mt-10" justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" lg="3" md="3" sm="12" v-for="({icon, title, desc}, index) in information" :key="index">
                        <v-card justify="center" align="center" class="pa-5">
                            <div>
                                <img :src="icon" class="IconAbaot" alt="">
                            </div>
                            <div>
                                <p class="Text-About">{{title}}</p>
                            </div>
                            <div>
                               <p class="Text-Description">{{desc}}</p> 
                            </div>
                        </v-card>
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
            {icon:'/descarga.png',title:'Lorem', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/descarga.png',title:'Lorem', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
            {icon:'/descarga.png',title:'Lorem', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit'},
        ],
    }),
  }
</script>
