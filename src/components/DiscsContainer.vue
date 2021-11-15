<template>
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
</template>
<script>
import axios from "axios";
import SingleDisc from "./SingleDisc.vue";
export default {
  name: "DiscsContainer",
  components: { SingleDisc },
  data() {
    return {
      discList: [],
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        this.discList = resp.data.response;
      });
  },
};
</script>