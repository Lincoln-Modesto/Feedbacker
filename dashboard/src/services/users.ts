export default (httpClient: any) => ({
  getMe: async (): Promise<any> => {
    const response = await httpClient.get('/users/me')

    return {
      data: response.data
    }
  },

  generateApiKey: async (): Promise<any> => {
    const response = await httpClient.post('/users/me/apikey')

    return {
      data: response.data
    }
  }
})
