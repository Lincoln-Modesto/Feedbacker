type auth = {
  email: string
  password: string
}

export default (httpClient: any) => ({
  login: async ({ email, password }: auth) => {
    const response = await httpClient.post('/auth/login', {
      email,
      password
    })

    let errors = null

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText
      }
    }

    return {
      data: response.data,
      errors
    }
  }
})
