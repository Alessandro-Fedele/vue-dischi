<template>
  <select
    v-model="genreValue"
    class="form-select"
    @change="$emit(`genreClick`, genreValue)"
  >
    <option value="">Tutti i Generi</option>
    <option value="rock">Rock</option>
    <option value="pop">Pop</option>
    <option value="jazz">Jazz</option>
    <option value="metal">Metal</option>
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
};
</script>