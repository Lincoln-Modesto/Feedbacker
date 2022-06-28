import useStore from "@/hooks/useStore";
import { setCurrentUser, cleanCurrentUser, setApiKey } from "@/store/user";

describe('UserStore', () => {

  afterEach(() => {
    cleanCurrentUser()
  })

  it('should set current user', () => {
    const store = useStore()

    setCurrentUser({ name: 'Lincoln' })
    expect(store.User.currentUser.name).toBe('Lincoln')
  })

  it('should set api_key an current user', () => {
    const store = useStore()

    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('should be clean current user', () => {
    const store = useStore()

    setCurrentUser({ name: 'Lincoln' })
    expect(store.User.currentUser.name).toBe('Lincoln')
    cleanCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})
