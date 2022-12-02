<template>
        <div class="intro-slider">
            <div class="intro-section bg-cover" style="background-image: url('/BannerPc.jpg')">
                <v-container fluid class="intro-content ">
                    <v-form ref="formulario" autocomplete="off">
                        <v-row align="center" justify="center" >
                             <v-col  align="center" justify="center" cols="12" offset-xl="5"  offset-lg="5" class="mr-lg-1 mr-md-1 pa-5 mt-15" offset-md="5" md="6" lg="4" sm="8"> 
                                 <p class="title-form">SOLICITA MÁS <br> INFORMACIÓN</p>
                                 <v-text-field
                                     label="Nombre Completo*"
                                     placeholder="Francisco "
                                     v-model="NombreCompleto"
                                     style="border-radius:0"
                                     class="ma-2 elevation-5"
                                     :rules="nameRules"
                                     hide-details
                                     solo
                                     dense
                                 ></v-text-field>
                                 <v-text-field
                                     label="Correo Electrónico*"
                                     v-model="Correo"
                                     placeholder="example@example.com"
                                     class="ma-2 elevation-5"
                                     :rules="emailRules"
                                     style="border-radius:0"
                                     hide-details
                                     solo
                                     dense
                                 ></v-text-field>
                                 <v-text-field
                                     label="Número de Celular*"
                                     v-model="NumeroCel"
                                     placeholder="3142484466r"
                                     type="number"
                                     :rules="nameRules"
                                     class="ma-2 elevation-5"
                                     style="border-radius:0"
                                     hide-details
                                     solo
                                     dense
                                 ></v-text-field>
                                 <v-row>
                                     <v-col cols="6">
                                         <v-text-field
                                             label="Ciudad*"
                                             v-model="Ciudad"
                                             placeholder="Villavicencio"
                                             :rules="nameRules"
                                             class="ma-2 elevation-5"
                                             style="border-radius:0"
                                             hide-details
                                             solo
                                             dense
                                         ></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                         <v-text-field
                                             label="Departamento*"
                                             :rules="nameRules"
                                             v-model="Departamento"
                                             placeholder="Meta"
                                             class="ma-2 elevation-5"                                
                                             style="border-radius:0"
                                             hide-details
                                             solo
                                             dense
                                         ></v-text-field>
                                     </v-col>
                                 </v-row>
                                 <v-select
                                     :items="items"
                                     label="Programa de interés*"
                                     placeholder="Programa de interés"
                                     v-model="Programa"
                                     :rules="nameRules"
                                     class="ma-2 elevation-5"
                                     style="border-radius:0"
                                     hide-details
                                     solo
                                     dense
                                 ></v-select>
                                 <v-row align="center" class="ma-2">
                                     <v-checkbox
                                         v-model="terminos"
                                         hide-details
                                         color="white"
                                         class="shrink mr-2 mt-0"
                                     ></v-checkbox>
                                     <div class="white--text"> Acepto terminos y condiciones*</div>
                                 </v-row>
                                 <v-row>
                                     <v-col>
                                         <v-btn
                                            v-show="btn"
                                             style="border-radius:0" 
                                             color="white"
                                             elevation="2"
                                             class="font-weight-black pa-5"
                                             @click="Enviar"
                                         >Enviar <br> Información</v-btn>
                                     </v-col>
                                 </v-row>
                             </v-col>
                            </v-row>
                            <v-row justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                    <v-snackbar
                                        class="pb-8"
                                        :timeout="3000"
                                        :value="snackbar"
                                        :color="colorSnack"
                                        rounded="pill"
                                    > {{ message }} </v-snackbar>
                                </v-col>
                            </v-row>
                            <v-row justify="center" align="center">
                                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                                    <v-progress-circular
                                        v-show="loading"
                                        indeterminate
                                        color="red darken-3"
                                    ></v-progress-circular>
                                </v-col>
                            </v-row>
                    </v-form>
                </v-container>
            </div>
        </div>
</template>
<script>
import Post from './Post/Post'
  export default {
    data: () => ({
        btn: true,
        snackbar: false,
        message: '',
        colorSnack: '',
        loading: false,
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        NombreCompleto:'',
        Correo:'',
        NumeroCel:'',
        Ciudad:'',
        Departamento:'',
        Programa:'',
        terminos: false,
        nameRules: [
            v => !!v || 'Campo requerido',
        ],
        emailRules: [
            v => /.+@.+\..+/.test(v) || '',
        ],
    }),
    methods:{
        async Enviar(){
            this.btn= false
            this.loading = true
            this.snackbar = true
            this.colorSnack = 'green accent-4'
            this.message = 'Se esta procesando su informacion por favor espere...'
            if(this.NombreCompleto !== '' && this.Correo !== '' && this.NumeroCel !== '' && this.Ciudad !== '' && this.Departamento !== '' &&  this.Programa !== '' && this.terminos !==false){
                const data = {
                    NombreCompleto:this.NombreCompleto,
                    Correo:this.Correo,
                    NumeroCelular:this.NumeroCel,
                    Ciudad:this.Ciudad,
                    Departamento:this.Departamento,
                    Programa:this.Programa
                }
                console.log(data)
                const response = await Post.SendForm(data)
                console.log(response)
                if(response.error === false){
                    this.loading = false
                    this.snackbar = true
                    this.btn= true
                    this.colorSnack = 'green accent-4'
                    this.message = 'Su información fue enviada con exito'
                    this.$refs.formulario.reset()
                    this.loading = false
                }
                else{
                    this.loading = false
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.message = 'Intente nuevamente'
                }
            }
        }
    }
  }
</script>
