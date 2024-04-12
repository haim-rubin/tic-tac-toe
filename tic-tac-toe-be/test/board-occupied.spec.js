import { expect } from 'chai'
import {
  isAllBaordOccupied,
  isWon,
  rotateBoard,
  scanRows,
  crossPath1,
  crossPath2,
} from '../src/handler.js'

describe('Board', () => {
  it('should check if all board is occupied', () => {
    const board = [
      ['o', 'o', 'x'],
      ['x', 'x', 'o'],
      ['o', 'x', 'x'],
    ]
    const allOccupied = isAllBaordOccupied({ board })
    expect(allOccupied).to.equal(true)
  })

  it('should check if the board is not all occupied', () => {
    const board = [
      ['o', null, 'x'],
      ['x', 'x', 'o'],
      ['o', 'x', 'x'],
    ]
    const allOccupied = isAllBaordOccupied({ board })
    expect(allOccupied).to.equal(false)
  })

  it('should check if board rotate', () => {
    const board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const rotatedBoard = rotateBoard({ board })
    const rotatedExpected = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]
    const equalValues = rotatedBoard.every((line, i) => {
      return line.every((place, j) => place === rotatedExpected[i][j])
    })

    expect(equalValues).to.equal(true)
  })

  it('should check if x won by cross 1', () => {
    const board = [
      ['x', 'o', 'x'],
      ['o', 'x', 'o'],
      ['o', 'o', 'x'],
    ]
    const won = crossPath1({ board, player: 'x' })
    expect(won).to.equal(true)
  })

  it('should check if x not won by cross 1', () => {
    const board = [
      ['x', 'o', 'x'],
      ['o', 'o', 'o'],
      ['o', 'x', 'x'],
    ]
    const won = crossPath1({ board, player: 'x' })
    expect(won).to.equal(false)
  })

  it('should check if x won by cross 2', () => {
    const board = [
      ['o', 'o', 'x'],
      ['o', 'x', 'o'],
      ['x', 'o', 'x'],
    ]
    const won = crossPath2({ board, player: 'x' })
    expect(won).to.equal(true)
  })

  it('should check if x not won by cross 2', () => {
    const board = [
      ['o', 'x', 'x'],
      ['o', 'o', 'o'],
      ['x', 'o', 'x'],
    ]
    const won = crossPath2({ board, player: 'x' })
    expect(won).to.equal(false)
  })

  it('should check if player x won', () => {
    const board = [
      ['x', 'x', 'x'],
      ['o', 'x', 'o'],
      ['o', 'o', 'x'],
    ]
    const won = isWon({ board, player: 'x' })
    expect(won).to.equal(true)
  })

  it('should check if player x not won', () => {
    const board = [
      ['x', 'o', 'x'],
      ['x', 'o', 'o'],
      ['o', 'x', 'x'],
    ]
    const won = isWon({ board, player: 'x' })
    expect(won).to.equal(false)
  })

  it('should check if player won in some line', () => {
    const board = [
      ['x', 'x', 'x'],
      ['o', 'x', 'o'],
      ['o', 'o', 'x'],
    ]
    const foundLine = scanRows({ board, player: 'x' })
    expect(foundLine).to.equal(true)
  })

  it('should check if player not won in some line', () => {
    const board = [
      ['x', 'o', 'x'],
      ['o', 'o', 'o'],
      ['o', 'x', 'x'],
    ]
    const foundLine = scanRows({ board, player: 'x' })
    expect(foundLine).to.equal(false)
  })
})
