import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { action, on, payload, reducer } from 'ts-action'

import { Store } from 'common/store'

type GetStoryPayload = { story: string }

export const SetStory = action('router/SET', payload<GetStoryPayload>())

export interface StoryRouterState {
  currentStory: string
}

const initialState = { currentStory: 'opening' }
export const storyRouterReducer = reducer<StoryRouterState>(
  [
    on(SetStory, (state, { payload: { story } }) => ({
      ...state,
      currentStory: story
    }))
  ],
  initialState
)

export const selectPath = (store: Store) => store.storyRouter.currentStory

export interface Props extends StoryRouterState {
  routeRecord: Record<string, React.ReactNode>
  setStory: (path: string) => InstanceType<typeof SetStory>
}

const Router: React.StatelessComponent<Props> = ({ routeRecord, currentStory }) => (
  <div>{routeRecord[currentStory]}</div>
)

const mapStateToProps = (state: Store) => ({
  currentStory: selectPath(state)
})

const mapDispatchToProps = (dispatch: Dispatch<Store>) => ({
  setStory: (story: string) => dispatch(new SetStory({ story }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Router)
