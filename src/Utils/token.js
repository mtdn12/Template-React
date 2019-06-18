const AUTH_TOKEN = 'auth-template'

/**
|--------------------------------------------------
| Authentication Token
|--------------------------------------------------
*/
const setToken = token => localStorage.setItem(AUTH_TOKEN, token)

const getToken = () => localStorage.getItem(AUTH_TOKEN)

const removeToken = () => localStorage.removeItem(AUTH_TOKEN)

export { setToken, getToken, removeToken }
