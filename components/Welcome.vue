<template >
    <div id="contact" >
        <div class="intro-section bg-cover bg" >
            <v-container fluid >
                <v-form ref="formulario" autocomplete="off" class="mt-15 mt-md-10 pt-md-10">
                    <v-row align="center" justify="center" >
                            <v-col  align="center" justify="center" cols="12" offset-xl="6"  offset-lg="5" class="mr-lg-1 mr-md-1 py-5 px-5 mt-md-15 pt-md-15" offset-md="5" md="6" lg="4" sm="8"> 
                            <div class="pa-1">
                                <p class="title-form">SOLICITA MÁS <br> INFORMACIÓN</p>
                            </div>
                                <v-text-field
                                    label="Nombre completo*"
                                    placeholder="Francisco "
                                    v-model="NombreCompleto"
                                    prepend-inner-icon="mdi-account-outline mdi-18px"
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
                                    prepend-inner-icon="mdi-email-outline mdi-18px"
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
                                    prepend-inner-icon="mdi-cellphone mdi-18px"
                                    :rules="nameRules"
                                    class="ma-2 elevation-5"
                                    style="border-radius:0"
                                    hide-details
                                    solo
                                    dense
                                ></v-text-field>
                                <v-row>
                                <v-col cols="6">
                                        <v-select
                                            label="Departamento*"
                                            :rules="nameRules"
                                            prepend-inner-icon="mdi-map-marker-outline mdi-18px"
                                            v-model="Departamento"
                                            :items="Departamentos"
                                            placeholder="Meta"
                                            class="ma-2 elevation-5"                                
                                            style="border-radius:0"
                                            hide-details
                                            solo
                                            dense
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-text-field
                                            label="Ciudad*"
                                            v-model="Ciudad"
                                            prepend-inner-icon="mdi-map-marker-outline mdi-18px"
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
                                    prepend-inner-icon="mdi-script-text-outline mdi-18px"
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
                                <v-dialog
                                    v-model="dialogSuccess"
                                    persistent
                                    max-width="290"
                                    >
                                    <v-card class="pa-5" justify="center" align="center">
                                        <v-img width="100" class="rotacionSuccess" src="/iconos/exito.png"></v-img>
                                       <p class="text-Gracias mt-2">¡Gracias por tu información!</p> 
                                       <p class="text-success">Pronto uno de nuestros asesores de posgrados se comunicará contigo</p>
                                    </v-card>
                                </v-dialog>
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
<style lang="scss">
.bg{
    background-image: url('/banners/bannerescritorio.jpg')!important;
    -webkit-background-image: url('/banners/bannerescritorio.webp')!important;
    -moz-background-image: url('/banners/bannerescritorio.jpg')!important;
    -o-background-image: url('/banners/bannerescritorio.jpg')!important;
    @media #{$tablet-device,$small-mobile}{
        background-image: url('/banners/Bannercel.webp')!important;
        -webkit-background-image: url('/banners/Bannercel.jpg')!important;
        -moz-background-image: url('/banners/Bannercel.jpg')!important;
        -o-background-image: url('/banners/Bannercel.jpg')!important;
    }
}
</style>
<script>
import Post from './Post/Post'
  export default {
    data: () => ({
        btn: true,
        dialogSuccess:false,
        dialogPoliticas: false,
        snackbar: false,
        message: '',
        preloader: false,
        colorSnack: '',
        loading: false,
        items: ["Especialización en Gestión Ambiental Sostenible",
                "Especialización en Ingeniería de Software",
                "Especialización en Salud Familiar",
                "Especialización en Producción Agrícola Tropical Sostenible",
                "Especialización en Gestión de Proyectos",
                "Especialización en RF y Sistemas Radar ",
                "Especialización en Finanzas",
                "Especialización en Instrumentación y Control Industrial",
                "Especialización en Administración en Salud",
                "Especialización en Epidemiología",
                "Especialización en Seguridad y Salud en el Trabajo",
                "Especialización en Acción Motriz",
                "Especialización en Acuicultura Aguas Continentales",
                "Especialización en Administración de Negocios",
                "Especialización en Gestión de la Calidad",
                "Maestría en gestión Ambiental sostenible",
                "Maestría en Sistemas Sostenibles de Salud - Producción Animal Tropical",
                "Maestría en Acuicultura",
                "Maestría en Producción Tropical Sostenible",
                "Maestría en Estudios de Desarrollo Local",
                "Maestría en Estudios Culturales",
                "Maestría en Epidemiología",
                "Maestría en Administración de Negocios",
                "Maestría en Educación",
                "Maestría en Seguridad y Salud en el Trabajo",
                "Doctorado en Ciencias Agrarias",
                ],
        Departamentos:[
            "Amazonas",
            "Antioquia",
            "Arauca",
            "Atlántico",
            "Bolívar",
            "Boyacá",
            "Caldas",
            "Caquetá",
            "Casanare",
            "Cauca",
            "Cesar",
            "Chocó",
            "Córdoba",
            "Cundinamarca",
            "Guainía",
            "Guaviare",
            "Huila",
            "La Guajira",
            "Magdalena",
            "Meta",
            "Nariño",
            "Norte de Santander",
            "Putumayo",
            "Quindío",
            "Risaralda",
            "San Andrés y Providencia",
            "Santander",
            "Sucre",
            "Tolima",
            "Valle del Cauca",
            "Vaupés",
            "Vichada"
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
    created(){
        this.preloader=true
        setTimeout(()=>{ this.preloader = false },2000)
    },
    methods:{
       

        async Enviar(){
            this.btn= false
            this.loading = true
            this.snackbar = true

            this.colorSnack = 'green accent-4'
            this.message = 'Se esta procesando su informacion por favor espere...'
            const hoy = new Date();
            if(this.NombreCompleto !== '' && this.Correo !== '' && this.NumeroCel !== '' && this.Ciudad !== '' && this.Departamento !== '' &&  this.Programa !== '' && this.terminos == true){
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
                    dataLayer.push({event: "form_submit"})
                    this.colorSnack = 'green accent-4'
                    this.message = 'Su información fue enviada con exito'
                    this.$refs.formulario.reset()
                    this.loading = false
                    this.dialogSuccess=true,
                    setTimeout(()=>{ this.dialogSuccess = false },3000)
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
                this.colorSnack = 'red accent-4'
                this.message = 'Por favor valide todos los datos'
            }
        }
    }
  }
</script>
