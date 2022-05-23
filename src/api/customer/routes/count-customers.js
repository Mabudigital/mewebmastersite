module.exports = {
  routes: [
      { // Path defined with a URL parameter
          method: 'GET',
          path: '/customers/count',
          handler: 'customer.count',
      },
  ]
}
