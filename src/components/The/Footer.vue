<template>
  <footer class="footer grid justify-items-center container text-grey mt-auto">
    <span
      v-html="getRightsInformation"
      class="cursor-default select-none block w-max"
    ></span>
    <ul
      v-if="github && linkedin && telegram && whatsapp"
      class="footer__socials w-max flex"
    >
      <base-img
        v-for="(social, key) in [github, linkedin, telegram, whatsapp]"
        :key="key"
        :src="`footer/${social.icon}`"
        img-class="cursor-pointer"
        class="footer__socials__link base-animation hover:-translate-y-1"
        @click-event="openSocialLink(social.path)"
      />
    </ul>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["github", "linkedin", "telegram", "whatsapp"]),
    getRightsInformation() {
      return `&copy; ${new Date().getFullYear()} Eagle Studio, All Rights Reserved`;
    },
  },
  methods: {
    openSocialLink(path) {
      window.open(path, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 0px;
  &__socials {
    margin-top: 8px;
    &__link {
      width: 38px;
      height: 38px;
      &:not(:first-child) {
        margin-left: 6px;
      }
    }
  }
}
</style>
