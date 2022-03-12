<template>
  <div class="my-5 grid grid-cols-1 md:grid-cols-4 gap-4 overflow-hidden">
    <div v-for="image in imagesArray" :key="image.id" class="w-full h-64 object-cover">
        <img
          :src="image"
        />
      </div>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      imagesArray: this.$props.images,
    };
  },
};
</script>
