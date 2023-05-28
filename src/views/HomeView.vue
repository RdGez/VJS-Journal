<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="goToDay" class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDay() {
      this.$router.push({ name: 'daybook' })
    }
  }
}
</script>
