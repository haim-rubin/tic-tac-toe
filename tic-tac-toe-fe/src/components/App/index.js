import { App as AppComponent } from './App'
import { inject, observer } from 'mobx-react'

export const App = inject(({ appMounted, appWillUnmount, ticTacStore }) => {
  const { status, currentPlayer, startNeGame, boardIsEmpty } = ticTacStore
  return {
    status,
    appMounted,
    startNeGame,
    boardIsEmpty,
    currentPlayer,
    appWillUnmount,
  }
})(observer(AppComponent))
