<template>
        <div id="contact" >
            <div class="intro-section bg-cover bg">
                <v-container fluid class="intro-content ">
                    <v-form ref="formulario" autocomplete="off">
                        <v-row align="center" justify="center" >
                             <v-col  align="center" justify="center" cols="12" offset-xl="5"  offset-lg="5" class="mr-lg-1 mr-md-1 pa-5 mt-15 pt-15 mt-lg-0 mt-xl-0 mt-md-0 pt-md-0 pt-lg-0 pt-xl-0" offset-md="5" md="6" lg="4" sm="8"> 
                                <div class="pa-1">
                                    <p class="title-form">SOLICITA MÁS <br> INFORMACIÓN</p>
                                </div>
                                 <v-text-field
                                     label="Nombre completo*"
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
                                     label="Correo electrónico*"
                                     v-model="Correo"
                                     :rules="emailRules"
                                     placeholder="example@example.com"
                                     class="ma-2 elevation-5"
                                     style="border-radius:0"
                                     hide-details
                                     solo
                                     dense
                                 ></v-text-field>
                                 <v-text-field
                                     label="Número de celular*"
                                     v-model="NumeroCel"
                                     placeholder="3142484466"
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
                                         class="mr-2 mt-0"
                                         off-icon="mdi-circle-outline mdi-light"
                                         on-icon="mdi-check-circle"
                                         dense
                                     ></v-checkbox>
                                     <a style="text-decoration: underline white"><div class="white--text"  @click="dialogPoliticas= true">  Acepto términos y condiciones*</div></a>
                                 </v-row>
                                 <v-dialog
                                    v-model="dialogPoliticas"
                                    transition="dialog-bottom-transition"
                                    max-width="700"
                                >
                                    <v-card class="pa-5"> 
                                        <v-row justify="center" align="center">
                                            <v-col>
                                                <h2 class="titulos">Politica de tratamiento de datos</h2>
                                                <div class="pa-5">De acuerdo con la Ley Estatutaria 1581 de 2.012 de Protección de Datos y el Decreto 1377 de 2.013, le informamos que sus
                                                    datos consignados en el presente formulario serán incorporados en una base de datos de responsabilidad de UNILLANOS, siendo tratados con las siguientes finalidades: históricos, científicos, estadísticos, gestión administrativa, gestión de clientes, encuestas de opinión, prospección comercial, venta a distancia, gestión de cobros y pagos, gestión económica y contable. De igual modo, se le informa que la base de datos en la que se encuentran sus datos personales es tratada cumpliendo con las medidas de seguridad definidas en la política de tratamiento desarrollada por UNILLANOS a la cual se puede tener acceso a través del sitio web www.unillanos.edu.co/. Usted puede ejercitar los derechos de acceso, corrección, supresión, revocación o reclamo por infracción sobre sus datos, mediante escrito dirigido a UNILLANOS por correo electrónico quejasyreclamos@unillanos.edu.co, indicando en el asunto el derecho que desea ejercitar, o mediante correo ordinario remitido a la dirección: Calle 37 No. 41-02 Barzal - PBX. 60 (8) 6616900 villavicencio, Meta, Colombia
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-dialog>
                                 <v-row>
                                     <v-col>
                                         <v-btn
                                            v-show="btn"
                                             style="border-radius:0" 
                                             color="white"
                                             elevation="2"
                                             class="font-weight-black pa-5 font-gotham"
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
<style  lang="scss">
.v-input--checkbox::v-deep {
  .v-label {
    color: rgba(0,0,0);
  }
}
</style>
<script>
import Post from './Post/Post'
  export default {
    data: () => ({
        btn: true,
        dialogPoliticas: false,
        snackbar: false,
        message: '',
        colorSnack: '',
        loading: false,
        items: ["Especialización en Gestión ambiental sostenible",
                "Especialización en ingeniería de software",
                "Especialización en salud familiar",
                "Especialización en producción agrícola tropical sostenible",
                "Especialización en Gestión de proyectos",
                "Especialización de rf y sistemas radar ",
                "Especialización en instrumentación y control industrial",
                "Especialización en administración en salud",
                "Especialización epidemiología",
                "Especialización seguridad y salud en el trabajo",
                "Especialización en acción motriz",
                "Especialización en acuicultura aguas continentales",
                "Especialización en administración de negocios",
                "Especialización en gestión de la calidad",
                "Maestría en gestión ambiental sostenible",
                "Maestría en sistemas sostenibles de salud- producción animal tropical",
                "Maestría en acuicultura",
                "Maestría en producción tropical sostenible",
                "Maestría estudios de desarrollo local",
                "Maestría en estudios culturales",
                "Maestría en epidemiología",
                "Maestría en administración de negocios",
                "Maestría en educación",
                "Maestría en seguridad y salud en el trabajo",
                "Doctorado en ciencias agrarias",

                ],
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
            const hoy = new Date();
            if(this.NombreCompleto !== '' && this.Correo !== '' && this.NumeroCel !== '' && this.Ciudad !== '' && this.Departamento !== '' &&  this.Programa !== '' && this.terminos !==false){
                const data = {
                    NombreCompleto:this.NombreCompleto,
                    Correo:this.Correo,
                    NumeroCelular:this.NumeroCel,
                    Ciudad:this.Ciudad,
                    Departamento:this.Departamento,
                    Programa:this.Programa,
                    fechaRegistro: hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 )  + '-' +  hoy.getDate(),
                    horaRegistro: hoy.getHours()+ ':' + hoy.getMinutes()+ ':' + hoy.getSeconds()
                }
                // console.log(data)
                const response = await Post.SendForm(data)
                // console.log(response)
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
            }else{
                this.btn= true
                this.loading = false
                this.snackbar = true
                this.colorSnack = 'green accent-4'
                this.message = 'Por favor valide todos los datos'
            }
        }
    }
  }
</script>
