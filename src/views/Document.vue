<template>
     <div>
          <v-container fluid>
               <v-row>
                    <v-col cols="3">
                         <v-btn @click.native="setDialog">
                              Tambah Dokumen
                         </v-btn>
                    </v-col>
               </v-row>
               <v-divider class="mt-2"></v-divider>
               <v-row class="mt-5">
                    <v-col v-for="menu in menuDocuments" :key="menu" :cols="cols" :sm="sm">
                         <v-card :to="menu.route">
                              <div class="text-center pa-2">
                                   <h3>{{ menu.name }}</h3> 
                              </div>
                         </v-card>
                    </v-col>
               </v-row>
              
          </v-container>
     </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
     
     data: () => ({
          menuDocuments: [
               { name: 'Foto', route: '/foto', cols: 12, sm: 6 },
               { name: 'Dokumen Sekolah', route: '/dokumen-sekolah', cols: 12, sm: 6 },
               { name: 'Data Siswa', route: '/data-siswa', cols: 12, sm: 6 },
               { name: 'Data Guru', route: '/data-guru', cols: 12, sm: 6 },
          ]
     }),
     methods: {
          ...mapActions({
               setDialogStatus: 'dialog/setStatus',
               setDialogComponent: 'dialog/setComponent'
          }),
          setDialog(){
               this.$emit('setDC')
          }
     }
}
</script>