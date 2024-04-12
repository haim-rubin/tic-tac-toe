import { inject, observer } from 'mobx-react'
import { Board as BoardComponent } from './Board'

export const Board = inject(({ ticTacStore }) => {
  const {
    board,
    tempPlace,
    onPlayerOut,
    onPlayerClick,
    currentPlayer,
    onPlayerEnter,
  } = ticTacStore

  return {
    board,
    tempPlace,
    onPlayerOut,
    onPlayerClick,
    currentPlayer,
    onPlayerEnter,
  }
})(observer(BoardComponent))
