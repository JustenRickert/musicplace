import * as React from 'react'

const styles = require('./styles.module.css')

import { default as _Opening } from './opening.md'
export { default as Game } from './Game'

export const Opening = () => {
  let paragraphCounter = 0
  return (
    <div className={styles.typewriter}>
      <_Opening
        components={{
          inlineCode: (props: React.HTMLAttributes<HTMLElement>) => (
            <code {...props} />
          ),
          h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} />,
          p: (props: React.HTMLAttributes<HTMLParagraphElement>) => {
            paragraphCounter += 0.25
            const style: React.CSSProperties = {
              animationName: 'typing',
              animationDuration: `${paragraphCounter}s`,
              animationTimingFunction: 'steps(10)'
            }
            return <p {...props} style={style} />
          }
        }}
      />
    </div>
  )
}
