<template>
  <div></div>
  <!-- <base-img
    :src="`decorations/${decoration}`"
    class="absolute"
    :style="{
      top: `${t}px`,
      bottom: `${b}px`,
      left: `${l}px`,
      right: `${r}px`,
      transform: `rotate(${rotate}deg)`,
    }"
  /> -->
</template>

<script>
export default {
  props: {
    decoration: {
      type: String,
      required: true,
      default: "",
    },
    t: {
      type: String,
      required: false,
      default: "auto",
    },
    b: {
      type: String,
      required: false,
      default: "auto",
    },
    l: {
      type: String,
      required: false,
      default: "auto",
    },
    r: {
      type: String,
      required: false,
      default: "auto",
    },
    rotate: {
      type: Number,
      required: false,
      default: 0,
    },
  },
};
</script>
