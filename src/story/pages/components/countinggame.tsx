import * as React from 'react'
import { connect } from 'react-redux'

import { selectCount } from 'story/countinggame'
import { Store } from 'common/store'

interface CountProps {
  count: number
}

const mapStateToCountProps = (state: Store) => ({
  count: selectCount(state)
})

const UnconnectedCount: React.StatelessComponent<CountProps> = ({ count }) => (
  <span>{count}</span>
)

export const Count = connect(mapStateToCountProps)(UnconnectedCount)
