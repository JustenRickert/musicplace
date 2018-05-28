import * as React from 'react'

import { default as _Opening } from './opening.md'
export { default as Game } from './Game'

export const Opening = () => {
  return (
    <_Opening
      components={{
        inlineCode: (props: React.HTMLAttributes<HTMLElement>) => {
          console.log('code', props)
          return React.createElement('code', props)
        },
        h1: (props: React.HTMLAttributes<HTMLHeadElement>) => {
          console.log('h1', props)
          return React.createElement('h1', props)
        },
        p: (props: React.HTMLAttributes<HTMLParagraphElement>) => {
          console.log('p', props)
          return React.createElement('p', props)
        }
      }}
    />
  )
}
