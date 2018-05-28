import * as React from 'react'

import StoryRouter from './StoryRouter'

import { Opening, Game } from './story'

export enum Story {
  Opening = 'opening',
  Game = 'game'
}

const routeRecord: Record<Story, React.ReactElement<any>> = {
  [Story.Opening]: <Opening />,
  [Story.Game]: <Game />
}

const App = () => (
  <div>
    <StoryRouter routeRecord={routeRecord} />
  </div>
)

export default App
