<template>
  <div class="wrapper bg-black min-h-screen text-white flex flex-col">
    <TheNavbar />
    <main class="wrapper__content">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TheNavbar from "@/components/The/Navbar.vue";
import TheFooter from "@/components/The/Footer.vue";
export default {
  components: {
    TheNavbar,
    TheFooter,
  },
  methods: {
    ...mapActions(["loadSocialNetworksData"]),
  },
  created() {
    this.loadSocialNetworksData();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
.wrapper {
  &__content {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    max-width: 100%;
  }
}
</style>
