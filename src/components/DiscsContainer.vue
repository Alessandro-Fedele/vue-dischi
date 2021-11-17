<template>
  <div>
    <SelectGenre @genreClick="genreFilter" :genreList="genreList"></SelectGenre>
    <div class="row row-cols-5 g-4">
      <div class="col" v-for="(disc, i) in filteredGenreCom" :key="i">
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
import SelectGenre from "./SelectGenre.vue";
export default {
  name: "DiscsContainer",
  components: { SingleDisc, Loader, SelectGenre },
  data() {
    return {
      discList: [],
      loading: true,
      filteredGenre: "",
      genreList: "",
    };
  },
  methods: {
    genreFilter(genreToFilter) {
      this.filteredGenre = genreToFilter;
    },
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
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        let arr = "";
        arr = resp.data.response.map(function (el) {
          return el.genre;
        });
        this.genreList = [...new Set(arr)];
      });
  },
  computed: {
    // Ogni volta che la variabile filteredGenre cambia grazie all'utente la computed si aggiorna
    filteredGenreCom() {
      if (!this.filteredGenre) {
        return this.discList;
      }
      return this.discList.filter((disc) => {
        return this.filteredGenre.toLowerCase() === disc.genre.toLowerCase();
      });
    },
  },
};
</script>