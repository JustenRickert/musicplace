import { action, on, payload, reducer } from 'ts-action'

import { Store } from 'common/store'

export const IncrementCount = action('countinggame', payload<{}>())

export interface CountingGameState {
  count: number
}

const initialState = { count: 0 }
export const countingGameReducer = reducer<CountingGameState>(
  [on(IncrementCount, (state, {}) => ({ count: state.count + 1 }))],
  initialState
)

export const selectCount = (store: Store) => store.countingGame.count
