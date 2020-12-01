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
        resolve({ status: 200 })
      }, 2000)
    })

    // return fetch(
    //   'https://uat.dispatchhealth.com/api/unauthenticated/care_requests',
    //   {
    //     method: 'POST',
    //     cache: 'no-cache',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept:
    //         'application/vnd.dispatchhealth.com; version=1, application/json',
    //     },
    //     body: JSON.stringify(payload),
    //   }
    // )
  },
}

export default api
