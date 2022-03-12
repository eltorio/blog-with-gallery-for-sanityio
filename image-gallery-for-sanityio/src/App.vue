<template>
  <div
    class="min-w-screen min-h-screen bg-blue-100 flex items-center overflow-hidden relative flex-col"
  >
    <div class="rounded-3xl bg-white shadow-xl mt-10 p-10 flex-col">
      <h1 class="text-6xl text-watermelon-600 text-center">Vue3 template</h1>
      <h3 class="text-xl text-watermelon-300 text-center">with</h3>
      <h1 class="text-6xl text-blue-700 text-center">
        Tailwindcss 3 <i class="fa-brands fa-css3"></i>
      </h1>
      <h3 class="text-xl text-watermelon-300 text-center">and</h3>
      <h1 class="text-6xl text-blue-700 text-center">
        Font Awesome 6 <i class="fa-solid fa-font-awesome"></i>
      </h1>
      <h3 class="text-sm text-red-300 text-center">
        don't forget to remove scripts and styles from index.html before
        deployement
      </h3>
    </div>
    <card-single-post
      :lazy="false"
      slug="testing-a-gallery"
      :nbPosts="1"
      :indexPosts="0"
    />
    <basic-card :msg="`Hello Vue ${app.version} in CodeSandbox!`" />
  </div>
</template>

<script>
import BasicCard from "@/components/BasicCard";
import CardSinglePost from "@/components/CardSinglePost";

export default {
  name: "App",
  data() {
    return { app }; //eslint-disable-line no-undef
  },
  components: {
    BasicCard,
    CardSinglePost,
  },
};
</script>

<style>
</style>
