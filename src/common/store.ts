import { combineReducers, createStore } from 'redux'

import { storyRouterReducer } from 'story/Router'
import { countingGameReducer } from 'story/countinggame'

const reducer = combineReducers({
  countingGame: countingGameReducer,
  storyRouter: storyRouterReducer
})

export type Store = ReturnType<typeof reducer>

export default createStore(reducer)
