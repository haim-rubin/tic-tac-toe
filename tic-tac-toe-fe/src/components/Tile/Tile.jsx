import cx from 'classnames'

import { PLAYERS_SIGNS } from '../../util/constants'

const HTML_FOR_MAPPER = {
  [PLAYERS_SIGNS.x]: 'cell-x',
  [PLAYERS_SIGNS.o]: 'cell-o',
}

export const Tile = ({
  occupiedBy,
  onPlayerClick,
  onPlayerEnter,
  onPlayerOut,
}) => {
  return (
    <div
      className={cx('tile', occupiedBy)}
      onClick={onPlayerClick}
      onMouseEnter={onPlayerEnter}
      onMouseOut={onPlayerOut}
    >
      <label htmlFor={HTML_FOR_MAPPER[occupiedBy]}></label>
    </div>
  )
}
