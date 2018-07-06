import Api from '@/services/api'

export default {
  fetchDonations () {
    return Api().get('/donations')
  },
  postDonation (donation) {
    return Api().post('/donations', donation,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteDonation (id) {
    return Api().put(`/donations/${id}/vote`)
  },
  deleteDonation (id) {
    return Api().delete(`/donations/${id}`)
  }
}
