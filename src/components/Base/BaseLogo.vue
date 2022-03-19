<template>
  <base-img
    src="logo"
    class="base__logo cursor-pointer"
    @click="goToTheTopOfThePage"
  />
</template>

<script>
export default {
  methods: {
    goToTheTopOfThePage() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.base {
  &__logo {
    height: 34px;
  }
}
</style>
