<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'DayBookLayout',
  components: {
    Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
  },
  methods: {
    ...mapActions('journal', ['loadEntries'])
  },
  computed: {
    ...mapState('journal', ['isLoading'])
  },
  created() {
    this.loadEntries();
  }
}
</script>

<template>
  <Navbar />
  <div v-if="isLoading" class="row justify-content-center align-items-center">
    <div class="col spinner"></div>
  </div>
  <div v-else class="d-flex">
    <div class="col-3">
      <EntryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>