import * as React from 'react'

import './app.module.css'

import Router from 'story/Router'
import { Opening, Game } from 'story/pages'

export enum Story {
  Opening = 'opening',
  Game = 'game'
}

const routeRecord: Record<Story, React.ReactElement<any>> = {
  [Story.Opening]: <Opening />,
  [Story.Game]: <Game />
}

const App = () => <Router routeRecord={routeRecord} />

export default App
