<template>
  <div
    class="min-w-screen min-h-screen bg-blue-100 flex items-center overflow-hidden relative flex-col"
  >
    <div class="rounded-3xl bg-white shadow-xl mt-10 mb-2 p-10 flex-col">
      <h1 class="text-6xl text-watermelon-600 text-center">Vue3 template</h1>
      <h3 class="text-xl text-watermelon-300 text-center">with</h3>
      <h1 class="text-6xl text-blue-700 text-center">
        Tailwindcss 3 <i class="fa-brands fa-css3"></i>
      </h1>
      <h3 class="text-xl text-watermelon-300 text-center">and</h3>
      <h1 class="text-6xl text-blue-700 text-center">
        Font Awesome 6 <i class="fa-solid fa-font-awesome"></i>
      </h1>
    </div>
    <div>
        <CardSinglePost
          ref="card_single_post"
          :lazy="false"
          :slug="slug"
          :nbPosts="1"
          :indexPosts="0"
        />
    </div>
    <basic-card :msg="`Hello Vue ${this.$.appContext.app.version} in CodeSandbox!`" />
  </div>
</template>

<script>
import BasicCard from "@/components/Cards/BasicCard";
import CardSinglePost from "@/components//Cards/CardSinglePost";

export default {
  name: "SinglePost",
  props: {

  },
  data() {
    //debugger; //eslint-disable-line no-debugger
    const slug = this.$route.params.slug;
    return {slug}; 
  },
  components: {
    BasicCard,
    CardSinglePost,
  },
  created() {
  },
  methods: {
  },
};
</script>

<style></style>
