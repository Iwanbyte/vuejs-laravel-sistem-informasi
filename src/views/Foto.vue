<template>
  <div>
    <v-row>
      <v-template v-for="foto in fotos" :key="foto">
        <v-container fluid>
          <v-col sm="12" cols="12">
            <v-card width="200">
               <v-card-title>
                    {{ foto.name }}
               </v-card-title>
              <v-img
                :src="'http://localhost:8000/storage/' + foto.gambar"
              ></v-img>
            </v-card>
          </v-col>
        </v-container>
      </v-template>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    fotos: [],
  }),
  created() {
    axios
      .get("http://localhost:8000/api/v1/dokuments")
      .then((response) => {
        let { data } = response.data;
        this.fotos = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
