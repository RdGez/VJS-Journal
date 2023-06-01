<template>
  <div class="entry-list-container p-3">
    <input 
      type="text"
      class="form-control"
      placeholder="Search..."
      v-model="term"
    />
    <div class="entries">
      <Entry v-for="entry in searchEntries" :entry="entry" :key="entry.id" />
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
import { mapGetters } from 'vuex';

export default {
  name: 'EntryList',
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue'))
  },
  data(){
    return {
      term: ''
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntriesByTerm']),
    searchEntries(){
      return this.getEntriesByTerm(this.term);
    }
  }
}
</script>