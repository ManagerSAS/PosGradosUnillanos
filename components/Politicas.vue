<template>
    <div>
        <v-btn
            class="v-btn--politicas elevation-5"
            fab
            dark
            color="#1a212f"
            @click="dialogPoliticas= true" 
            >
          <v-icon >
            mdi-alert-decagram-outline  mdi-24px
          </v-icon>
        </v-btn>
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
    </div>
</template>
<script>
export default ({
    data: () => ({
        dialogPoliticas: false,
    })
})
</script>
<style>
  .v-btn--politicas {
    bottom: 15px;
    position: fixed;
    z-index: 10; 
    right: 10px; 
  }
</style>