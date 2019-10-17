<template>
  <div class="home">
    
      <h1>{{ message }}</h1>
      <p>{{ message_2 }}</p>
    
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
      message: "Events! We find them! For you!",
      message_2: "Take a peek around. See what you find. You may find something unexpected."
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>
