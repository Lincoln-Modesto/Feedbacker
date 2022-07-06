import { setApiKey, setFingerPrint, setCurrentPage } from '@/store'

interface IframeControl {
  updateCoreValueOnStore(): void
  notifyOpen(): void
  notifyClose(): void
}

export function useIframeControl (): IframeControl {
  function updateCoreValueOnStore (): void {
    if (process.env.NODE_ENV === 'production') {
      const query = new URLSearchParams(window.location.search)
      const apiKey = query.get('api_key') ?? ''
      const page = query.get('page') ?? ''
      const fingerprint = query.get('fingerprint') ?? ''

      setCurrentPage(page)
      setApiKey(apiKey)
      setFingerPrint(fingerprint)
      return
    }

    setCurrentPage('https//playground-url.com')
    setApiKey('api_key_de_teste')
    setFingerPrint('452353453424324523')
  }

  function notifyOpen (): void {
    window.parent.postMessage({
      isWidget: true,
      isOpen: true
    }, '*')
  }

  function notifyClose (): void {
    window.parent.postMessage({
      isWidget: true,
      isOpen: false
    }, '*')
  }

  return {
    updateCoreValueOnStore,
    notifyOpen,
    notifyClose
  }
}
