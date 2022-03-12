<template>
  <div class="rounded-3xl bg-white text-slate-600 shadow-xl mt-10 p-10">
    <span>{{ msg }}</span><br/>
    <router-link to="/">
    <i class="fa-solid fa-house"></i> Back Home.
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BasicCard",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
