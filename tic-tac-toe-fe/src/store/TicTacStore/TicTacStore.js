import { action, configure, observable, makeObservable } from 'mobx'

import { getEmptyBaord } from '../../util/helper'
import { getBoardStatus } from '../../apis/board'
import { PLAYERS_SIGNS, STATUS_CODES } from '../../util/constants'

configure({ enforceActions: 'observed' })

const togglePlayer = {
  [PLAYERS_SIGNS.o]: PLAYERS_SIGNS.x,
  [PLAYERS_SIGNS.x]: PLAYERS_SIGNS.o,
}

export class TicTacStore {
  status = null
  tempPlace = {}
  board = getEmptyBaord()
  currentPlayer = PLAYERS_SIGNS.x

  constructor() {
    makeObservable(this, {
      board: observable,
      status: observable,
      tempPlace: observable,
      currentPlayer: observable,

      startNeGame: action,
      onPlayerOut: action,
      resetStatus: action,
      onPlayerEnter: action,
      onPlayerClick: action,
    })
  }

  get boardIsEmpty() {
    return this.board.every((line) => line.every((cell) => cell === null))
  }

  onPlayerClick = async ({ row, col }) => {
    try {
      const { board, status } = await getBoardStatus({
        row,
        col,
        player: this.currentPlayer,
        board: this.board,
      })
      this.board = board
      this.status = status

      if (status !== STATUS_CODES.WON) {
        this.currentPlayer = togglePlayer[this.currentPlayer]
      }
      if (status === STATUS_CODES.ALREADY_OCCUPIED) {
        this.resetStatus()
      }
    } catch (error) {
      this.status = STATUS_CODES.ERROR
      this.resetStatus()
    }
  }

  resetStatus = () => {
    setTimeout(() => {
      this.status = null
    }, 1000)
  }
  onPlayerEnter = ({ row, col }) => {
    console.log(`Palyer enter to place: ${row}x${col}`)
    this.tempPlace = `${row}-${col}`
  }

  onPlayerOut = ({ row, col }) => {
    console.log(`Palyer out from place: ${row}x${col}`)
    this.tempPlace = null
  }

  startNeGame = () => {
    this.board = getEmptyBaord()
    this.currentPlayer = PLAYERS_SIGNS.x
    this.status = null
  }
}
