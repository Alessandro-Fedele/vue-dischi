<template>
  <select
    v-model="genreValue"
    class="form-select"
    @change="$emit(`genreClick`, genreValue)"
  >
    <option value="">Tutti i Generi</option>
    <option v-for="(genre, i) in genreList" :key="i" :value="genre">
      {{ genre }}
    </option>
  </select>
</template>
<script>
export default {
  name: "SelectGenre",
  data() {
    return {
      genreValue: "",
    };
  },
  props: ["genreList"],
};
</script>