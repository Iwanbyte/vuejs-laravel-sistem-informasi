<template>
     <v-card>
          <v-toolbar dark color="primary">
               <v-btn icon dark @click.native="close">
                    <v-icon>mdi-close</v-icon>
               </v-btn>
               <v-text-field 
               hide-details 
               append-icons="microphone" 
               flat 
               autofocus="true" 
               label="Search" 
               prepend-inner-icon="mdi-magnify" 
               v-model="keyword" 
               @input="doSearch">
               </v-text-field>
          </v-toolbar>
          <v-card-text>
               <v-subheader v-if="keyword.length > 0">
                    Result search "{{ keyword }}"
               </v-subheader>
               <!-- <v-alert :value="books.length==0 && keyword.length > 0"> -->
               <v-alert>
                    Sorry, but noresult found
               </v-alert>

               hasil pencarian di sini
               <v-container>
                    <v-layout wrap class="ma-0 pa-0" grid-list-sm>
                         <!-- <v-flex v-for="book in books" :key="`book-`+book.id"> -->
                         <v-flex>
                              <!-- <book-item /> -->
                         </v-flex>
                    </v-layout>
               </v-container>
          </v-card-text>
     </v-card>
</template>

<script>
export default {
     name: 'Search',
     data(){
          return {
               keyword: '',
               books: []
          }
     },
     methods: {
          doSearch(){
               let keyword = this.keyword
               if (keyword > 0) {
                    this.axios.get('/books/search/'+keyword)
                    .then((response) => {
                         let { data } = response.data
                         this.books = data
                    })
                    .catch(error => {
                         console.log(error);
                    })
               } else {
                    this.books = []
               }
          },
          close(){
               this.$emit('closed', false)
          }
     },
}
</script>