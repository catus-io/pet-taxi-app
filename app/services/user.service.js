export default class UserService {
  constructor(axios) {
    this.axios = axios
  }
  // 나중에 징워져도 됩니다. 데이터를 가져올 때 토큰을 함께 실어서 넘기면 됩니다.
  verifyToken(token) {
    return this.axios.post('/verify', null, { headers: { 'authorization': token } })
  }
  signin(user) {
    return this.axios.post('/signin', user)
  }
  signup(user) {
    return this.axios.post('/signup', user)
  }
}