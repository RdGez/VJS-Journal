import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-projects-97f5b-default-rtdb.firebaseio.com',
})

export default journalApi
