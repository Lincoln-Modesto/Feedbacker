const defaultPagination = {
  type: '',
  limit: 5,
  offset: 0
}

export default (httpClient: any) => ({
  getAll: async ({ type, limit, offset } = defaultPagination): Promise<any> => {
    const query = { type, limit, offset }

    if (type) {
      query.type = type
    }

    const response = await httpClient.get('/feedbacks', { params: query })
    return { data: response.data }
  },

  getSummary: async (): Promise<any> => {
    const response = await httpClient.get('/feedbacks/summary')
    return { data: response.data }
  }
})
