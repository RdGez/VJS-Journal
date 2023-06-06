import { useStore } from "vuex"

const useAuth = () => {
  const store = useStore()

  const signUp = async (user) => {
    return await store.dispatch('auth/signUp', user)
  }

  return { signUp }
}

export default useAuth