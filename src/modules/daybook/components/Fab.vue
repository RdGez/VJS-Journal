<template>
  <button class="btn btn-primary" @click="$emit('on:click')">
    <img v-if="!isNew" src="@/assets/save.svg" alt="Add" width="30" />
    <img v-else src="@/assets/plus.svg" alt="Add" width="30" />
  </button>
</template>

<script>
export default {
  props: {
    isNew: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 20px;
  height: 80px;
  position: fixed;
  right: 20px;
  width: 80px;
}
</style>