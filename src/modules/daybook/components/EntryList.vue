<template>
  <div class="entry-list-container p-3">
    <input 
      type="text"
      class="form-control"
      placeholder="Search..."
    />
    <div class="entries">
      <Entry v-for="item in 100" :key="item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .entry-list-container {
    height: calc(100vh - 60px);
    border-radius: 0 0 10px 10px;

    .entries {
      height: calc(100vh - 120px);
      overflow-y: scroll;
    }
  }
</style>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'EntryList',
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
  },
}
</script>