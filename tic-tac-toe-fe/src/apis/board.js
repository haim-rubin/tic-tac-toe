import { post } from '../util/http/http'

export const getBoardStatus = async ({ row, col, player, board }) => {
  try {
    return post({
      url: `/api/v1/check-board-status`,
      body: { board, player, col, row },
    })
  } catch (error) {
    throw error
  }
}
