<template>
  <div>
    <alert />
    <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="namecategories"
            :rules="categoriesRules"
            :counter="255"
            label="Name Categories"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="slug"
            :rules="slugRules"
            :counter="255"
            label="Slug"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="image" label="Image" :rules="[v => !!v || 'Image is required']" required></v-text-field>
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field v-model="status" label="Status" :rules="statusRules" required></v-text-field>
        </v-col>
      </v-row>

      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree ?" required></v-checkbox>

    <v-btn :disabled="!valid" color="success" @click="validate">Validate</v-btn>

    </v-container>
  </v-form>
  </div>
  
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'About',
  components: {
    Alert: () => import('../components/Alert')
  },
  data:() => ({
    namecategories: '',
    slug: '',
    image: '',
    status: '',
    valid: false,
    nameCategories: '',
    categoriesRules: [
      v => !!v || 'Name is reuired',
      v => v.length <= 255 || 'Name must be less than 255 characters'
    ],
    statusRules: [
      v => !!v || 'Status is required',
      v => v.length <= 50 || 'Name must be less than 50 characters'
    ],
    checkbox: false,
  }),
  methods: {
    validate(){
      this.$refs.form.validate(),
      axios.post('http://127.0.0.1:8000/api/v1/categories/store', {
        name: this.namecategories,
        slug: this.slug,
        image: this.image,
        status: this.status
      })
      .then(() => {
        this.namecategories = '',
        this.slug = '',
        this.image = '',
        this.status = '',
        this.setAlert({
          status: true,
          color: 'success',
          text: 'Data berhasil ditambahkan'
        })
      })
      .catch(error => {
        console.log(error);
      })
    },
    ...mapActions({
      setAlert: 'alert/set'
    }),
    close(){
      this.setAlert({
        status: false
      })
    }
  },
}
</script>
