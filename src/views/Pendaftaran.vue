<template>
  <div>
    <div class="text-center">
      <h1>PPDB</h1>
      <h2>SMPS Nasional Amanah Bangsa</h2>
    </div>
    <v-divider></v-divider>
    <br />
    <v-card>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                outlined
                v-model="namaLengkap"
                label="Nama Lengkap"
                :rules="nameRules"
                :counter="10"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                outlined
                v-model="namaPanggilan"
                label="Nama Panggilan"
                :rules="nameRules"
                :counter="10"
                required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="12">
              <v-text-field
                outlined
                v-model="nisn"
                label="NISN"
                :rules="emailRules"
                :counter="10"
                required
              ></v-text-field>
            </v-col>
            <v-col sm="12">
              <v-select
                v-model="jenisKelamin"
                label="Jenis Kelamin"
                outlined
                reuqired
                :items="itemsJenisKelamin"
                :rules="jenisKelaminRules"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="12">
              <v-text-field
              v-model="tempatLahir"
                label="Tempat Lahir"
                outlined
                required
                :rules="tlRules"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
               <v-col sm="12">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Tanggal Lahir"
                    prepend-icon="mdi-calendar"
                    readonly
                    outlined
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row>
               <v-col sm="12">
                    <v-select v-model="agama" label="Agama" outlined required :rules="agamaRules" :items="itemsAgama"></v-select>
               </v-col>
          </v-row>
          <v-row>
               <v-col sm="12">
                    <v-text-field v-model="alamat" outlined :rules="alamatRules" :counter="500" label="Alamat"></v-text-field>
               </v-col>
          </v-row>
          <v-row>
               <v-col sm="12">
                    <v-text-field v-model="noTelpSiswa" outline :rules="telpSiswa" :counter="12" label="No. Telp Siswa" outlined></v-text-field>
               </v-col>
          </v-row>
          <v-row>
               <v-col sm="12">
                    <v-text-field v-model="noTelpWaliSiswa" outline :rules="telpWaliSiswa" :counter="12" label="No. Telp Wali Siswa" outlined></v-text-field>
               </v-col>
          </v-row>
          <v-row>
               <v-col sm="12">
                    <div class="text-center">
                         <v-btn color="blue" class="white--text" :disabled="!valid" @click="submit">
                              Daftar
                         </v-btn>
                    </div>
               </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "pendaftaran",
  data: () => ({
     valid: true,
     namaLengkap: '',
     namaPanggilan: '',
     nisn: '',
     jenisKelamin: '',
     tempatLahir: '',
     date: null,
     agama: '',
     noTelpSiswa: '',
     noTelpWaliSiswa: '',
     menu: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name tidak boleh lebih dari 10 karakter",
    ],
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => v.length <= 10 || "Email tidak boleh lebih dari 10 karakter",
    ],
    jenisKelaminRules: [(v) => !!v || "Jenis Kelamin harus diisi"],
    tlRules: [(v) => !!v || "Tempat Lahir harus diisi"],
    tanggalLahirRules: [(v) => !!v || "Tanggal Lahir harus diisi"],
    agamaRules: [
         v => !!v || 'Agama wajib diisi'
    ],
    alamatRules: [
         v => !!v || 'Alamat wajib diisi',
         v => v.length <= 500 || 'Alamat tidak boleh lebih dari 500 karakter'
    ]
    ,
    telpSiswa: [
         v => !!v || 'No. Telpon Siswa wajib diisi',
         v => v.length <= 12 || 'No. Telp tidak boleh dari 12 karakter'
    ],
    telpWaliSiswa: [
         v => !!v || 'No. Telpon Wali Siswa wajib diisi',
         v => v.length <= 12 || 'No. Telp tidak boleh dari 12 karakter'
    ],
    itemsJenisKelamin: ["Laki - laki", "Perempuan"],
    itemsAgama: ['Islam', 'Kristen', 'Kahtolik', 'Budha', 'Hindu', 'Konghucu'], 
  }),
  watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
};
</script>
