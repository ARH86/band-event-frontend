<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <h3>{{ message_2 }}</h3>
  </div>
</template>

<style>
  h1 {
    color: #527ACC;
  }
</style>

<script>
export default {
  data: function() {
    return {
      message: "We started this to pratice our newly developed skills after bootccamp.",
      message_2: "It's built with a Rails back-end, vue.js Front-end, pulling from the Seatgeek API. Further functionality is on it's way.",
     
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>
