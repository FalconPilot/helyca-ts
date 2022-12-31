import * as React from 'react'

import { SceneryProvider, useScenery } from 'contexts/scenery'
import { Scenes } from 'scenes'

const AppView: React.FC = () => {
  const [{ currentScene }] = useScenery()

  return {
    'title': <Scenes.Title />
  }[currentScene[0]]
}

export const App: React.FC = () =>
  <SceneryProvider>
    <AppView />
  </SceneryProvider>
