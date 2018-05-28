import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { SetStory } from 'story/Router'
import { IncrementCount } from 'story/countinggame'

// ROUTING BUTTON

interface RoutingDispatch {
  setStory: (story: string) => InstanceType<typeof SetStory>
}
const mapDispatchToRoutingButtonProps = (dispatch: Dispatch): RoutingDispatch => ({
  setStory: (story: string) => dispatch(new SetStory({ story }))
})

interface RoutingProps {
  story: string
  text: string
}
const UnconnectedRoutingButton: React.StatelessComponent<
  RoutingProps & RoutingDispatch
> = ({ story, text, setStory }) => (
  <button onClick={_ => setStory(story)}>{text}</button>
)

export const RoutingButton = connect(undefined, mapDispatchToRoutingButtonProps)(
  UnconnectedRoutingButton
)

// COUNTING GAME BUTTON

interface CountingGameDispatch {
  incrementCount: () => InstanceType<typeof IncrementCount>
}
const mapDispatchToCountingGameProps = (dispatch: Dispatch) => ({
  incrementCount: () => dispatch(new IncrementCount({}))
})

interface CountingGameProps {
  text: string
}

const UnconnectedCountingGameButton: React.StatelessComponent<
  CountingGameProps & CountingGameDispatch
> = ({ incrementCount, text }) => (
  <button onClick={_ => incrementCount()}>{text}</button>
)

export const CountingGameButton = connect(undefined, mapDispatchToCountingGameProps)(
  UnconnectedCountingGameButton
)
