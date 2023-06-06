import authApi from "../../../api/authApi"

export const signUp = async ({ commit }, user) => {
  const {name, email, password} = user

  try {
    const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
    const { idToken, refreshToken } = data

    const response = await authApi.post(':update', { displayName: name, idToken })
    return { ok: true, message: 'User created successfully!'}
  } catch (error) {
    return { ok: false, message: error.response.data.error.message }
  }
}