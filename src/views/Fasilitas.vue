<template>
     <div>
          <v-container fluid>
               <v-row>
                    <v-col cols="6" v-for="f in fasilitas" :key="f">
                         <v-card>
                              <v-img :src="f.img" class="white--text align-end" height="200px" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                                   <v-card-title v-text="f.text"></v-card-title>
                              </v-img>
                              
                              <v-card-actions>
                                   <v-btn color="blue" class="white--text">
                                        See
                                   </v-btn>
                              </v-card-actions>
                         </v-card>
                    </v-col>
               </v-row>
          </v-container>
     </div>
</template>

<script>
export default {
     name: 'fasilitas',
     data: () => ({
          fasilitas: [
               { title: 'perpustakaan', text: 'Dilengkapi dengan perpustakaan', img: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
               { title: 'lab', text: 'Dilengkapi dengan laboratorium komputer', img: 'https://images.pexels.com/photos/2898170/pexels-photo-2898170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
          ]
     })
}
</script>