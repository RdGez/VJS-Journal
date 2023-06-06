import authApi from "../../../api/authApi"

export const signUp = async ({ commit }, user) => {
  const {name, email, password} = user

  try {
    const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
    const { idToken, refreshToken } = data

    await authApi.post(':update', { displayName: name, idToken })

    delete user.password
    commit('signIn', { user, idToken, refreshToken })
    
    return { ok: true, message: 'User created successfully!'}
  } catch (error) {
    return { ok: false, message: error.response.data.error.message }
  }
}

export const signIn = async ({ commit }, user) => {
  const {email, password} = user

  try {
    const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true })
    const { displayName, idToken, refreshToken } = data

    delete user.password
    user.name = displayName
    commit('signIn', { user, idToken, refreshToken })
    
    return { ok: true, message: 'Sign In Successfully!'}
  } catch (error) {
    return { ok: false, message: error.response.data.error.message }
  }
}

export const signOut = async ({ commit }) => {
  commit('logout')
  return { ok: true, message: 'Sign Out Successfully!'}
}

export const checkAuthentication = async ({ commit }) => {
  const idToken = localStorage.getItem('idToken')
  const refreshToken = localStorage.getItem('refreshToken')

  if(!idToken) {
    commit('logout')
    return { ok: false, message: 'User not authenticated!'}
  }

  try {
    const { data } = await authApi.post(':lookup', { idToken })
    const { displayName, email } = data.users[0]

    const user = { name: displayName, email }
    commit('signIn', { user, idToken, refreshToken })

    return { ok: true, message: 'User authenticated!'}
  } catch (error) {
    commit('logout')
    return { ok: false, message: 'User not authenticated!'}
  }
}