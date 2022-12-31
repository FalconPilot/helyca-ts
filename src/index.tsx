import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from 'components/App'

const nodeID = 'root'

const root = document.getElementById(nodeID)

if (!root) {
  throw new Error(`Root element #${nodeID} could not be found`)
}

ReactDOM.render(<App />, root)
