import bus from '../utils/bus'

const EVENT_NAME = 'modal:toggle'

export default function useModal () {
  function open (payload = {}): void {
    bus.emit(EVENT_NAME, { status: true, ...payload })
  }

  function close (payload = {}): void {
    bus.emit(EVENT_NAME, { status: false, ...payload })
  }

  function listen (fn: any): void {
    bus.on(EVENT_NAME, fn)
  }

  function off (fn: any): void {
    bus.off(EVENT_NAME, fn)
  }

  return { open, close, listen, off }
}
