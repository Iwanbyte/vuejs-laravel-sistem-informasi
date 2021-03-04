<template>
  <v-snackbar
    v-model="alert"
    :color="color"
    :timeout="timeout"
    multi-line="true"
    top="true"
  >
    {{ text }}
    <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" icon dark text @click="close">
          <v-icon>mdi-close-circle</v-icon>
        </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "alert",
  data: () => ({
    timeout: 100000,
  }),
  computed: {
    ...mapGetters({
      status: "alert/status",
      color: "alert/color",
      text: "alert/text",
    }),
    alert: {
      get() {
        return this.status;
      },
      set(value) {
        this.setAlert({
          status: value,
          type: "success",
          text: "test",
        });
      },
    },
  },
  methods: {
    ...mapActions({
      setAlert: "alert/set",
    }),
    close() {
      this.setAlert({
        status: false,
      });
    },
  },
};
</script>
