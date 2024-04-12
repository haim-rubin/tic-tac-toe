import { statusCodes } from './constants/status-codes.js'

export const isAllBaordOccupied = ({ board }) => {
  return board.every((line) => {
    return line.every((place) => !!place)
  })
}

export const scanRows = ({ board, player }) => {
  return board.some((row) => {
    return row.every((col) => col === player)
  })
}

export const rotateBoard = ({ board }) => {
  return board.reduce(
    (all, line) => {
      Array.from({ length: 3 }, (_, i) => all[i].push(line[i]))
      return all
    },
    [[], [], []],
  )
}

export const crossPath1 = ({ board, player }) => {
  return board
    .map((line, index) => line[index])
    .every((cell) => cell === player)
}

export const crossPath2 = ({ board, player }) => {
  const maxIndex = board.length - 1
  return board
    .map((line, index) => line[maxIndex - index])
    .every((cell) => cell === player)
}

export const isWon = ({ board, player }) => {
  const pathFound =
    scanRows({ board, player }) ||
    scanRows({ board: rotateBoard({ board }), player }) ||
    crossPath1({ board, player }) ||
    crossPath2({ board, player })

  return pathFound
}

export const getBordStatus = ({ board, row, col, player }) => {
  if (board[row][col]) {
    return {
      board,
      status: statusCodes.ALREADY_OCCUPIED,
    }
  }

  board[row][col] = player

  if (isWon({ board, player })) {
    return {
      board,
      status: statusCodes.WON,
    }
  }
  if (isAllBaordOccupied({ board })) {
    return {
      board,
      status: statusCodes.THERE_IS_A_TIE,
    }
  }

  return {
    board,
    status: statusCodes.CONTINUE_NEXT_STEP,
  }
}
