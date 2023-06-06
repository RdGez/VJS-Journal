export const signIn = (state, { user, idToken, refreshToken}) => {
  console.log(user, idToken, refreshToken)
  if (!user || !idToken || !refreshToken) return
  localStorage.setItem('idToken', idToken)
  state.idToken = idToken

  localStorage.setItem('refreshToken', refreshToken)
  state.refreshToken = refreshToken

  state.user = user
  state.status = 'authenticated'
}

export const logout = (state) => {
  localStorage.removeItem('idToken')
  state.idToken = null

  localStorage.removeItem('refreshToken')
  state.refreshToken = null

  state.user = null
  state.status = 'not-authenticated'
}