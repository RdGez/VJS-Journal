import { computed } from "vue"
import { useStore } from "vuex"

const useAuth = () => {
  const store = useStore()

  const signUp = async (user) => {
    return await store.dispatch('auth/signUp', user)
  }

  const signIn = async (user) => {
    return await store.dispatch('auth/signIn', user)
  }

  const signOut = async () => {
    store.commit('journal/clearEntries')
    return await store.dispatch('auth/signOut')
  }

  const checkAuthentication = async () => {
    return await store.dispatch('auth/checkAuthentication')
  }

  const manageAuthError = (error) => {
    console.log(error)
    switch (error) {
      case 'EMAIL_EXISTS':
        return 'Email already exists, please use another email.'
      case 'OPERATION_NOT_ALLOWED':
        return 'Password sign-in is disabled, please contact support.'
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        return 'Too many attempts, please try again later.'
      case 'EMAIL_NOT_FOUND': 
        return 'Email or password is incorrect, please try again.'
      case 'INVALID_PASSWORD':
        return 'Email or password is incorrect, please try again.'
      default:
        return 'Something went wrong, please try again.'
    }
  }

  return { 
    checkAuthentication, 
    manageAuthError,
    signIn, 
    signUp,
    signOut,
    username: computed(() => store.getters['auth/userName']),
    authStatus: computed(() => store.getters['auth/currentState']),
  }
}

export default useAuth