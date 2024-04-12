import express from 'express'
import bodyParser from 'body-parser'
import { checkBoard } from './controller.js'

export const run = ({ port }) => {
  const app = express()

  app.use(bodyParser.json())

  app.post('/v1/check-board-status', checkBoard)

  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
}
