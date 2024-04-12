import { Tile } from '../Tile'

const getPlace = ({ tempPlace, row, col, currentPlayer, place }) => {
  const isTempPlace = tempPlace === `${row}-${col}` && !place
  if (isTempPlace) {
    return currentPlayer
  }

  return place
}

export const Board = ({
  board,
  tempPlace,
  onPlayerOut,
  onPlayerClick,
  currentPlayer,
  onPlayerEnter,
}) => {
  return (
    <div className='board'>
      {board.map((line, row) =>
        line.map((place, col) => {
          const placeJoined = getPlace({
            tempPlace,
            row,
            col,
            currentPlayer,
            place,
          })

          return (
            <Tile
              key={`tile-${row}-${col}`}
              occupiedBy={placeJoined}
              onPlayerClick={() => {
                onPlayerClick({ row, col })
              }}
              onPlayerEnter={() => onPlayerEnter({ row, col })}
              onPlayerOut={() => onPlayerOut({ row, col })}
            >
              {place}
            </Tile>
          )
        }),
      )}
    </div>
  )
}
