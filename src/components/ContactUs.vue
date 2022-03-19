<template>
  <section id="contact-us" class="contact-us">
    <div class="contact-us__container bg-blacky w-screen">
      <div class="contact-us__container__content container flex lg:grid">
        <h2 class="contact-us__container__content__title">
          Contact us to create the interface of your website
        </h2>
        <base-button
          :href="email"
          class="contact-us__container__content__button"
        >
          Contact us</base-button
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["email"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
.contact-us {
  &__container {
    max-width: 100%;
    &__content {
      padding: 187px 0px;
      @include premobile {
        padding: 80px 0px;
      }
      &__title {
        max-width: 826px;
        @include tablet {
          max-width: 100%;
        }
      }
      &__button {
        @include tablet {
          margin-top: 50px;
        }
      }
    }
  }
}
</style>
