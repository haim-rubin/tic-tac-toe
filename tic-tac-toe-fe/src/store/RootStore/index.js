import RootStore from './RootStore'

import { TicTacStore } from '../TicTacStore'
const rootStore = new RootStore({
  ticTacStore: new TicTacStore(),
})

export default rootStore
