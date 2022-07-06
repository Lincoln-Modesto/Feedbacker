import mockAxios from 'axios'
import AuthService from '@/services/auth'

jest.mock('axios')

describe('AuthService', () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return a token when user login', async () => {
    const token = '123.123.123'

    //@ts-ignore
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } })
    })

    const response = await AuthService(mockAxios).login({ email: 'lincoln@mail.com', password: '123' })
    expect(response.data).toHaveProperty('token')
    expect(response.data).toMatchSnapshot()
  })

  it('should return an user when user register', async () => {
    const user = {
      name: 'Lincoln',
      password: '123',
      email: 'lincoln@mail.com'
    }

    //@ts-ignore
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await AuthService(mockAxios).register(user)
    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('password')
    expect(response.data).toHaveProperty('email')
    expect(response.data).toMatchSnapshot()
  })

  it('should throw an error when there\'s not network', async () => {
    const errors = { status: 404, statusText: 'Not Found' }

    //@ts-ignore
    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ request: errors })
    })

    const response = await AuthService(mockAxios).login({ email: 'lincoln@mail.com', password: '123' })
    expect(response.errors).toHaveProperty('status')
    expect(response.errors).toHaveProperty('statusText')
  })
})
