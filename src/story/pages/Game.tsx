import * as React from 'react'

import { RoutingButton } from './components/button'
import { default as Description } from './gamedescription.md'

const Game: React.StatelessComponent = () => (
  <div>
    <Description />
    <RoutingButton story="opening" text="Go back to opening text" />
  </div>
)

export default Game
