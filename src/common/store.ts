import { combineReducers, createStore } from 'redux'

import { storyRouterReducer } from 'story/Router'

const reducer = combineReducers({
  storyRouter: storyRouterReducer
})

export type Store = ReturnType<typeof reducer>

export default createStore(reducer)
