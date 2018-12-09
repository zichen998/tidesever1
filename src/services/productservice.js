import Api from '@/services/api'

export default {
  fetchProducts () {
    return Api().get('/products')
  },
  postProduct (product) {
    return Api().post('/products', product,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteProduct (id) {
    return Api().put(`/products/${id}/vote`)
  },
  deleteProduct (id) {
    return Api().delete(`/products/${id}`)
  },
  fetchProduct (id) {
    return Api().get(`/products/${id}`)
  },
  putProduct (id, product) {
    console.log('REQUESTING ' + product._id + ' ' +
      JSON.stringify(product, null, 5))
    return Api().put(`/products/${id}`, product,
      { headers: {'Content-type': 'application/json'} })
  }
}
