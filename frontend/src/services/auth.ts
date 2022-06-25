import { AxiosInstance } from 'axios'

export type auth = {
  email: string
  password: string
}

type register = {
  name: string
  email: string
  password: string
}

export default (httpClient: AxiosInstance) => ({
  register: async ({ name, email, password }: register) => {
    const response = await httpClient.post('/auth/register', {
      name,
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
  },
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
