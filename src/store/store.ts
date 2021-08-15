import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import reducerTeam from './ducks/reducerTeam/reducer'
import reducerPlayers from './ducks/reducerPlayers/reducer'
import reducerForm from './ducks/reducerForm/reducer'

const createRootReducer = () => combineReducers({
  team: reducerTeam,
  players: reducerPlayers,
  form: reducerForm
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }