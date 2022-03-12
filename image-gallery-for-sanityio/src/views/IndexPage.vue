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
    <div v-for="(post, index) in posts" :key="post._id">
      <lazy-observer :id="index" @on-change="onlazyBlog">
        <CardSinglePost
          ref="card_single_post"
          :lazy="true"
          :slug="post.slug.current"
          :nbPosts="posts.length"
          :indexPosts="index"
        />
      </lazy-observer>
    </div>

    <basic-card :msg="`Hello Vue ${app.version} in CodeSandbox!`" />
  </div>
</template>

<script>
import BasicCard from "@/components/Cards/BasicCard";
import CardSinglePost from "@/components/Cards/CardSinglePost";
import LazyObserver from "@/components/Utilities/LazyObserver.vue";
import sanityClient from "@sanity/client";

const query = `*[_type == "post"]{
  _id,
  publishedAt,
  title,
  slug,
  excerpt
}| order(publishedAt desc)[0...50]`;

export default {
  name: "App",
  data() {
    return { loading: true, posts: [], error: null, app }; //eslint-disable-line no-undef
  },
  components: {
    BasicCard,
    LazyObserver,
    CardSinglePost,
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanityClient({
        projectId: process.env.VUE_APP_SANITY_PROJECT_ID,
        dataset: process.env.VUE_APP_SANITY_DATASET,
        token: process.env.VUE_APP_SANITY_READ_TOKEN,
        useCdn: true,
        apiVersion: process.env.VUE_APP_SANITY_VERSION,
      })
        .fetch(query)
        .then(
          (posts) => {
            this.loading = false;
            this.posts = posts;
            this.posts.forEach((post) => {
              post.loaded = false;
            });
          },
          (error) => {
            this.error = error;
          }
        );
    },
    onlazyBlog(entry, unobserve, id) {
      if (
        entry.isIntersecting &&
        this.$refs.card_single_post[id] !== undefined
      ) {
        unobserve();
        this.posts[id].loaded = true;
        this.$refs.card_single_post[id].fetchData(this.posts[id].slug.current);
      }
    },
  },
};
</script>

<style></style>
