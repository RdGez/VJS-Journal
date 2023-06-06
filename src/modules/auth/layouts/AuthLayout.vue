<template>
  <div class="container">
    <div class="auth-card">
      <div class="auth-card--body">
        <router-view /> 
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  color: #000;
  display: flex;
  height: 100vh;
  justify-content: center;

  .auth-card {
    width: 400px;
    height: 350px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    &--body {
      padding: 20px;
    }

    .auth-card--body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
}
</style>