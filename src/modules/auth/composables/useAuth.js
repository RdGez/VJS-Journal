import { useStore } from "vuex"

const useAuth = () => {
  const store = useStore()

  const signUp = async (user) => {
    return await store.dispatch('auth/signUp', user)
  }

  const manageAuthError = (error) => {
    switch (error) {
      case 'EMAIL_EXISTS':
        return 'Email already exists, please use another email.'
      case 'OPERATION_NOT_ALLOWED':
        return 'Password sign-in is disabled, please contact support.'
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        return 'Too many attempts, please try again later.'
      default:
        return 'Something went wrong, please try again.'
    }
  }

  return { signUp, manageAuthError }
}

export default useAuth