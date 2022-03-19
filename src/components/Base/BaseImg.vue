<template>
  <figure>
    <img
      :src="require(`@/assets/images/${src}.${format}`)"
      :alt="alt"
      :class="imgClass"
      class="w-full h-full object-cover"
      @click="$emit('click-event')"
    />
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
      default: "",
    },
    alt: {
      type: String,
      required: false,
      default: "",
    },
    format: {
      type: String,
      required: false,
      default: "svg",
    },
    imgClass: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
