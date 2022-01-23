import axios from "axios"

const requestToken = () => {
  return axios.get(
    `https://api.themoviedb.org/3/authentication/token/new?api_key=77d0ea4c52d1c8e5ec9399c08f8bcb04`
  )
}
const login = (credentials) => {
  return axios.post(
    `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=77d0ea4c52d1c8e5ec9399c08f8bcb04`,
    credentials
  )
}

export { login, requestToken }
