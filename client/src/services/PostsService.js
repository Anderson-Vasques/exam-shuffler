import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('questions')
  },
  fetchAnswers () {
    return Api().get('answers')
  },
  fetchAnswer () {
    return Api.get('/answers/:id')
  }
}
