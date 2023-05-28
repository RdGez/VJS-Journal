<template>
  <div class="no-entry-container d-flex justify-content-center align-items-center">
    <div class="no-entry-message">
      <img src="@/assets/grid.svg" alt="Grid" class="icon" height="100"/>
      <h1 class="display-4">No entry selected...</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.no-entry-container {
  height: calc(100vh - 60px);

  .no-entry-message {
    opacity: 0.5;
    height: 100px;
    text-align: center;
  }
}
</style>