export default (httpClient: any) => ({
  getMe: async () => {
    const response = await httpClient.get('/users/me')

    return {
      data: response.data
    }
  }
})
