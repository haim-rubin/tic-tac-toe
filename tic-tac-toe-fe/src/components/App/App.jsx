import cx from 'classnames'
import { useEffect } from 'react'

import { Board } from '../Board'
import { STATUS_CODES } from '../../util/constants'

export const App = ({
  status,
  appMounted,
  startNeGame,
  boardIsEmpty,
  currentPlayer,
  appWillUnmount,
}) => {
  useEffect(() => {
    appMounted()
    return () => {
      appWillUnmount()
    }
  })

  const error = {
    [STATUS_CODES.ALREADY_OCCUPIED]: `Invalid move, turn move to '${currentPlayer}'`,
    [STATUS_CODES.ERROR]: 'Error occurred. Please try again later',
  }[status]

  return (
    <div>
      <div className='center'>
        <h1 className='text-center title'>Tic Tac Toe</h1>
        <div className=''>
          <button
            disabled={boardIsEmpty}
            className={cx('text-center start-new-game', {
              disabled: boardIsEmpty,
            })}
            onClick={startNeGame}
          >
            Start new Game
          </button>
        </div>
        <div className='error-message-wrapper'>
          {error && <div className='error-message'>{error}</div>}
        </div>
        <div className={cx('current-player', currentPlayer)}>
          Current player <span>{currentPlayer}</span>
        </div>

        {[STATUS_CODES.WON, STATUS_CODES.THERE_IS_A_TIE].includes(status) && (
          <>
            <div className='center game-over w-full h-full'></div>
            <div className='center won-message'>
              {status === STATUS_CODES.WON &&
                `Player '${currentPlayer}' Won!!!`}
              {status === STATUS_CODES.THERE_IS_A_TIE && `No one won, tie!`}
            </div>
          </>
        )}
      </div>
      <Board />
    </div>
  )
}
