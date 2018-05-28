import * as React from 'react'

import Router from './story/Router'

import { Opening, Game } from './story/pages'

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
    <Router routeRecord={routeRecord} />
  </div>
)

export default App
