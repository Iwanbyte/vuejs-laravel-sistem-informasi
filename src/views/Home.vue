<template>
  <v-container fluid>
    <!-- carousel -->
    <v-card>
      <v-carousel v-model="model" class="mb-5">
      <v-carousel-item 
      v-for="imgSlide in imgSlides" 
      :key="imgSlide"
      :src="'http://localhost:8000/storage/'+imgSlide.gambar"
      reverse-transition="fade-transition"
      transition="fade-transition">
      </v-carousel-item>
    </v-carousel>
    </v-card>
    <!-- end carousel -->
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    model: 0,
    show: false,
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
    ],
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    imgSlides: []
  }),
  created(){
    axios.get('http://localhost:8000/api/v1/dokuments')
    .then((response) => {
      let { data } = response.data
      this.imgSlides = data
    })
    .catch((error) => {
      console.log(error);
    })
  }
};
</script>
