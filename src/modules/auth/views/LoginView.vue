<template>
  <h1 class="title">
    <span class="material-icons">👋🏻</span>
    Sign In
  </h1>
  <form class="form-data" action="">
    <input autofocus type="email" placeholder="E-mail" required />
    <input type="password" placeholder="Password" required />
    <button>Sign In</button>
  </form>
  <RouterLink :to="{ name: 'signup' }" class="go-register">Do not have an account yet? Sign up</RouterLink>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
</style>