<template>
  <a
    class="base-animation h-max block text-center select-none hover:-translate-y-1 active:bg-purple active:text-white active:border-purple"
    :class="[
      `base__button base__button--${variant} w-full text-white`,
      outline
        ? 'bg-transparent border border-white'
        : 'bg-purple text-base-sm text-bold',
    ]"
    :href="href"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: false,
      default: "fill",
    },
    href: {
      type: String,
      required: true,
      default: "",
    },
  },
  computed: {
    outline() {
      return this.variant == "outline";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
.base {
  &__button {
    border-radius: 5px;
    &:hover:not(:active) {
      box-shadow: 0px 4px 4px 0px var(--grey);
      -webkit-box-shadow: 0px 4px 4px 0px var(--grey);
      -moz-box-shadow: 0px 4px 4px 0px var(--grey);
    }
    &--outline {
      backdrop-filter: blur(2px);
      padding: 11px 8px;
      max-width: 157px;
      @include mobile {
        padding: 7px 4px;
        max-width: 127px;
      }
    }
    &--fill {
      padding: 16px 27px;
      max-width: 204px;
      @include mobile {
        padding: 12px 20px;
        max-width: 166px;
      }
    }
  }
}
</style>
