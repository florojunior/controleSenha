<template>
  <v-container fluid>
      <v-row>
          <v-col>
               <v-btn
                color="pink darken-3" large
                :loading="carregando" 
                @click="proximo()"
              >
                <p class="title font-weight-medium mb-0 white--text " style="text-transform: initial;font-family: 'Source Sans Pro', sans-serif !important;" >
                  Próximo
                </p>
                <v-icon right color="white" >
                  mdi-check
                </v-icon>      
              </v-btn>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>