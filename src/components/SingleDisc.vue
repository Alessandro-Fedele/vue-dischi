<template>
  <div class="card">
    <img :src="poster" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-text">{{ author }}</p>
      <p class="card-text">{{ year }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleDisc",
  props: {
    poster: String,
    title: String,
    author: String,
    genre: String,
    year: String,
  },
};
</script>