<template>
  <div class="rounded-3xl bg-white text-slate-600 shadow-xl mt-10 p-10">
    <span>{{ msg }}</span>
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
