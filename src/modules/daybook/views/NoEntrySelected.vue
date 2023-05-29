<template>
  <div class="no-entry-container d-flex justify-content-center align-items-center">
    <div class="no-entry-message">
      <img src="@/assets/grid.svg" alt="Grid" class="icon" height="100"/>
      <h1 class="display-4">No entry selected...</h1>
    </div>
  </div>
  <Fab />
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  }
};
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