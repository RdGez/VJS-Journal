<template>
  <nav class="d-flex align-items-center navbar bg-dark px-3">
    <a class="navbar-brand text-white">
      <img
        alt="Logo"
        src="@/assets/logo.svg"
        class="d-inline-block align-text-top"
      />
    </a>
    <div class="d-flex">
      <div class="logout">
        <img src="@/assets/off.svg" alt="Logout" />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .logout {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
