const api = {
  checkForService: (payload) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1200)
    })
  },

  createCareRequest: (payload) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
}

export default api
