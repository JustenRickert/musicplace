import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { SetStory } from '../../StoryRouter'

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
