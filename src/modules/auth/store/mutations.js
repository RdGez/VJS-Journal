export const signIn = (state, { user, idToken, refreshToken}) => {
  if (!user || !idToken || !refreshToken) return
  localStorage.setItem('idToken', idToken)
  state.idToken = idToken

  localStorage.setItem('refreshToken', refreshToken)
  state.refreshToken = refreshToken

  state.user = user
  state.status = 'authenticated'
}