<template>
  <div>
    <v-app>
      <!-- header -->
      <v-app-bar
        absolute
        color="success"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3" app>
        

        <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>



        <v-toolbar-title> SMPS Nasional Amanah Bangsa </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          icon
          @click="setDialogComponent('search') && setDialogStatus(true)"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon v-if="logged">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs dark show-arrows>
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
            <v-tab to="/">Beranda</v-tab>
            <!-- menu dropdown -->
            <v-menu v-if="more.length" bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text class="align-self-center" v-bind="attrs" v-on="on">
                  Profil Sekolah <v-icon>mdi-menu-down</v-icon>
                </v-btn>
              </template>

              <v-list class="grey lighten-3">
                <v-list-item v-for="item in more" :key="item" :to="item.route">
                  {{ item.name }}
                </v-list-item>
              </v-list>
            </v-menu>
            <!-- end menu dropdown -->
            <v-tab v-for="item in tabItems" :key="item" :to="item.route">
              {{ item.name }}
            </v-tab>

            <!-- tab untuk admin -->
            <v-tab v-if="!guest" to="/document"> Dokumen </v-tab>
            <!-- end tab untuk admin -->
          </v-tabs>
        </template>
      </v-app-bar>
      <!-- end header -->
      <!-- sidebar -->
      <v-card>
        <v-navigation-drawer app v-model="drawer">
          <!-- menu before login -->
          <v-list v-if="guest">
            <v-list-list-item-group actve-class="blue--text text--accent-4">
              <v-list-item>
                <v-btn
                  block
                  color="blue"
                  class="white--text"
                  @click="setDialogComponent('login') && setDialogStatus(true)"
                >
                  <v-icon left>mdi-account</v-icon>
                  Login
                </v-btn>
              </v-list-item>
              <v-list-item to="/register">
                <v-btn block color="success">
                  <v-icon left>mdi-lock</v-icon>
                  Register
                </v-btn>
              </v-list-item>
            </v-list-list-item-group>
          </v-list>
          <!-- end menu before login -->

          <!-- menu for user after login -->
          <v-list nav dense v-if="!guest">
            <v-list-item-group active-class="blue--text text--accent-4">
              <v-list-item>
                <v-avatar color="primary" size="34" class="white--text mr-5"
                  >A</v-avatar
                >
                <v-list-item-title>{{ user.name }}</v-list-item-title>
              </v-list-item>
              <v-divider class="mb-2"></v-divider>
              <v-list-item to="/">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Home </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Account</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <template v-slot:append v-if="!guest">
            <div class="pa-2">
              <v-btn block color="red" class="white--text" @click="logout">
                <v-icon>mdi-lock</v-icon>
                Logout
              </v-btn>
            </div>
          </template>
          <!-- end menu for user after login -->
        </v-navigation-drawer>
      </v-card>
      <!-- end sidebar -->

      <!-- alert -->
      <alert />
      <!-- end alert -->

      <keep-alive>
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="scale-transition"
        >
          <component
            :is="currentComponent"
            @closed="setDialogStatus"
          ></component>
        </v-dialog>
      </keep-alive>

      

      <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container fluid style="height: 1000px;">
        <!-- main -->
      <v-main height="1000px">
        <v-container fluid>
          <router-view @setDC="setDialog"></router-view>
        </v-container>
      </v-main>
      <!-- end main -->

      <!-- footer -->
      <v-card class="indigo lighten-1 white--text text-center">
        <v-footer app absolute>
          <v-card-text>
            <v-btn icon text v-for="icon in icons" :key="icon" class="mx-5">
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>
          <!-- <v-card-text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam labore eos veritatis recusandae, architecto voluptatibus ipsum fugit. Ducimus, sapiente saepe provident veniam, facilis laborum modi esse, pariatur maiores assumenda id.
          </v-card-text> -->
          <v-divider></v-divider>
          <v-card-text>
            Copyright &copy; {{ new Date().getFullYear() }} | Iwan Byte
          </v-card-text>
        </v-footer>
      </v-card>
      <!-- end footer -->
      </v-container>
    </v-sheet>
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "App",
  components: {
    Alert: () => import("./components/Alert"),
    Search: () => import("./components/Search"),
    Login: () => import("./components/Login"),
    TambahDokumen: () => import("./components/TambahDokumen"),
  },
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    tab: null,
    drawer: false,
    logged: true,
    more: [
      { name: "Sejarah Singkat", route: "/sejarah-singkat" },
      { name: "Visi Misi", route: "/visi-misi" },
      { name: "Pendidikan Inklusif", route: "/pendidikan-inklusif" },
    ],
    tabItems: [
      { name: "Fasilitas", route: "/fasilitas" },
      { name: "Program", route: "/program" },
      { name: "Pendaftaran", route: "/pendaftaran" },
    ],
  }),
  methods: {
    ...mapActions({
      setDialogStatus: "dialog/setStatus",
      setDialogComponent: "dialog/setComponent",
      setAuth: "auth/set",
      setAlert: "alert/set",
    }),
    setDialog() {
      this.setDialogStatus(true) && this.setDialogComponent("TambahDokumen");
    },
    logout() {
      let config = {
        headers: {
          Authorization: "Bearer " + this.user.api_token,
        },
      };
      axios.post("http://127.0.0.1:8000/api/v1/logout", {}, config).then(() => {
        this.setAuth({});
        this.setAlert({
          status: true,
          color: "success",
          text: "Logout Berhasil",
        }).catch((error) => {
          let { data } = error.response;
          this.setAlert({
            status: true,
            color: "error",
            text: data.message,
          });
        });
      });
    },
  },
  computed: {
    ...mapGetters({
      guest: "auth/guest",
      user: "auth/user",
      dialogStatus: "dialog/status",
      currentComponent: "dialog/component",
    }),
    dialog: {
      get() {
        return this.dialogStatus;
      },
      set(value) {
        this.setDialogStatus(value);
      },
    },
  },
};
</script>
