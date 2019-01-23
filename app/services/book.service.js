export default class BookService {
  constructor(axios, applicationSettings) {
    this.axios = axios,
    this.applicationSettings = applicationSettings
  }
  search(address) {
    return this.axios.post('/search', {addr: address})
  }
  book(book) {
    return this.axios.post('/book', book, { headers: { 'authorization': this.applicationSettings.getString('token') } })
  }
}