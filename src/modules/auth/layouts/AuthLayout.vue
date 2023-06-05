<template>
  <div class="container">
    <div class="login-card">
      <div class="login-card--body">
        <h1 class="title">
          <span class="material-icons">👋🏻</span>
          Sign In
        </h1>
        <form class="form-data" action="">
          <input type="text" placeholder="E-mail" required />
          <input type="text" placeholder="Password" required />
          <button>Sign In</button>
        </form>
        <a class="go-register" href="#">Do not have an account yet?</a>
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

  .login-card {
    width: 400px;
    height: 350px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    &--body {
      padding: 20px;
    }

    .login-card--body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      .title {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        .material-icons {
          font-size: 40px;
          margin-right: 10px;
        }
      }

      form {
        width: 100%;
      }

      input {
        border: 1px solid #ccc;
        border-radius: 5px;
        display: block;
        font-size: 16px;
        margin-bottom: 10px;
        padding: 10px;
        width: 100%;
      }

      button {
        background-color: #000;
        border-radius: 5px;
        border: 0;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        padding: 10px;
        transition: all 0.3s ease-in-out;
        width: 100%;

        &:active {
          background-color: #333;
        }

        &:hover {
          background-color: #333;
        }
      }

      .go-register {
        color: #000;
        font-size: 14px;
        margin-top: 10px;
        text-decoration: underline;
        align-self: self-start;

        &:hover {
          color: #333;
        }
      }
    }
  }
}
</style>