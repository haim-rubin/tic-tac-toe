import httpStatus from 'http-status'
import { getBordStatus } from './handler.js'

export const checkBoard = (req, res) => {
  try {
    const { board, row, col, player } = req.body
    const boardStatus = getBordStatus({ board, row, col, player })

    res.send(boardStatus)
  } catch (error) {
    console.log(error)
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: httpStatus[httpStatus.INTERNAL_SERVER_ERROR] })
  }
}
