<template>
  <nav class="d-flex align-items-center navbar bg-dark px-3">
    <a class="navbar-brand text-white">
      <img alt="Logo" src="@/assets/logo.svg" class="d-inline-block align-text-top" />
      <span class="username">{{ username }}</span>
    </a>
    <div class="d-flex">
      <div @click="logout" class="logout">
        Sign out
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import useAuth from '../../auth/composables/useAuth'

export default {
  setup() {
    const router = useRouter()
    const { username, signOut } = useAuth()

    return {
      username,
      logout: async () => {
        await signOut()
        router.push({ name: 'signin' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.username {
  margin-left: 10px;
  font-size: 15px;
}
.logout {
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}
</style>
