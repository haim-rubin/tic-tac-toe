import { action, configure, makeObservable } from 'mobx'

configure({ enforceActions: 'observed' })

class RootStore {
  constructor({ ticTacStore }) {
    makeObservable(this, {
      appMounted: action,
      appWillUnmount: action,
    })
    this.ticTacStore = ticTacStore
    this.appMounted = this.appMounted.bind(this)
    this.appWillUnmount = this.appWillUnmount.bind(this)
  }

  appMounted() {
    console.log('App mounted')
  }

  // eslint-disable-next-line class-methods-use-this
  appWillUnmount() {
    console.log('App will unmount')
  }
}

export default RootStore
