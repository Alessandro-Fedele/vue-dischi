<template>
  <div class="container-fluid p-0">
    <div class="my-nav">
      <img src="@/assets/spotify-logo-png.png" alt="logo" />
    </div>
    <div class="container p-0">
      <DiscsContainer></DiscsContainer>
    </div>
  </div>
</template>

<script>
import DiscsContainer from "./components/DiscsContainer.vue";
export default {
  name: "App",
  components: { DiscsContainer },
};
</script>

<style lang="scss">
@import "@/styles/app";
</style>
