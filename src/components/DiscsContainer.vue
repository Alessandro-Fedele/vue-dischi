<template>
  <div>
    <div class="row row-cols-5 g-4">
      <div class="col" v-for="(disc, i) in discList" :key="i">
        <SingleDisc
          :poster="disc.poster"
          :title="disc.title"
          :author="disc.author"
          :genre="disc.genre"
          :year="disc.year"
        ></SingleDisc>
      </div>
    </div>
    <Loader label="Pacman" v-if="loading === true"></Loader>
  </div>
</template>
<script>
import axios from "axios";
import SingleDisc from "./SingleDisc.vue";
import Loader from "./Loader.vue";
export default {
  name: "DiscsContainer",
  components: { SingleDisc, Loader },
  data() {
    return {
      discList: [],
      loading: true,
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        this.discList = resp.data.response;
        setTimeout(() => {
          this.loading = false;
        }, 1500);
      });
  },
};
</script>