<template>
  <v-container fluid class="pt-15 pb-15">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="12" md="8" lg="8" xl="8" justify="center" align="center">
                <h3 class="titles ">¿POR QUÉ HACER MIS POSGRADO <br> <span class="font-weight-light" >EN UNILLANOS?</span> </h3>
                <div class="linea"></div>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col justify="center" align="center"  cols="12" md="11" lg="8" sm="12">
                <v-row  justify="center" align="center">
                    <v-col justify="center" align="center" cols="12" lg="4" md="4" sm="12" v-for="({icon, desc}, index) in information" :key="index">
                        <div justify="center" align="center" style="border-radius:0; background-color:#e6e6e6" class="pa-5  mr-7">
                            <div>
                                <img :src="icon" class="IconAbaot" alt="">
                            </div>
                            <div>
                               <p class="Text-Description">{{desc}}</p> 
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
            {icon:'/descarga.png', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit '},
            {icon:'/descarga.png', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit '},
            {icon:'/descarga.png', desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolorum velit '},
        ],
    }),
  }
</script>
