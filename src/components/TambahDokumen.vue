<template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>
          Tambah Dokumen
        </v-toolbar-title>
      </v-toolbar>
      <v-container fluid>
        <div class="text-center">
          <h3>Halaman Tambah Dokumen</h3>
        </div>
        <v-divider></v-divider>
        <v-form ref="form" v-model="valid" class="mt-5" enctype="multipart/form-data">
          <v-text-field
            outlined
            dense
            label="Name Dokumen"
            v-model="namaDokumen"
            :rules="ndRules"
            required
            prepend-icon="mdi-pencil-plus"
          ></v-text-field>
          <v-file-input
            v-model="gambar"
            :rules="rules"
            accept="image/*,.pdf"
            prepend-icon="mdi-camera"
            label="File"
            outlined dense
            @click="selectFile"
          ></v-file-input>
          <v-text-field v-model="body" label="Body" :rules="bodyRules" outlined dense prepend-icon="mdi-pencil-plus" required></v-text-field>
          <div class="text-center">
            <v-btn color="primary" :disabled="!valid" @click="submit">
              Submit
            </v-btn>
          </div>
        </v-form>
      </v-container>
    </v-card>
</template>
<script>
import { mapActions } from 'vuex';
import axios from 'axios'
export default {
  name: "tambahdokumen",
  data: () => ({
    valid: false,
    namaDokumen: '',
    gambar: null,
    body: '',
    ndRules: [
      (v) => !!v || "Nama Dokumen is required",
      (v) => v.length < 255 || "Tidak boleh lebih dari 255 karakter",
    ],
    bodyRules: [
      (v) => !!v || "Body is required",
      (v) => v.length < 255 || "Body tidak boleh lebih dari 255 karakter",
    ],
    rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
  }),
  methods: {
    ...mapActions({
      setAlert: 'alert/set'
    }),
    selectFile(event){
      this.gambar = event.target.files[0]
    },
    submit(){
         if (this.$refs.form.validate()) {
           let formData = new FormData();
            formData.append('name', this.namaDokumen);
            formData.append('gambar', this.gambar);
            formData.append('body', this.body);
           let config = {
             headers: {
             'Content-Type': 'multipart/form-data;'
           }
           }
           axios.post("http://127.0.0.1:8000/api/v1/dokuments/store", formData, config)
           .then(() => {
             this.setAlert({
               status: true,
               color: 'success',
               text: 'Insert data successfully'
             })
             this.close()
           })
           .catch((error) => {
             let responses = error.response
             this.setAlert({
               status: true,
               color: 'success',
               text: responses.data.message
             })
           })
         }
    },
    close() {
      this.$emit("closed", false);
    },
  },
};
</script>
