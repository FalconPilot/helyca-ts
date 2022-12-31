import * as React from 'react'

const initialState: SceneryState = {
  currentScene: ['title']
}

const SceneryContext = React.createContext<ContextValues>([
  initialState,
  {
    changeScene: () => {},
  }
])

export const SceneryProvider: React.FC<{
  children: React.ReactElement
}> = ({ children }) => {
  const [state, setState] = React.useState<SceneryState>(initialState)

  // Change current scene
  const changeScene = React.useCallback((scene: SceneType) => {
    setState(prev => ({
      ...prev,
      currentScene: scene,
    }))
  }, [setState])

  // Memoize context values
  const contextValues: ContextValues = React.useMemo(() => [
    state,
    {
      changeScene
    }
  ], [state, changeScene])

  return (
    <SceneryContext.Provider value={contextValues}>
      {children}
    </SceneryContext.Provider>
  )
}

export const useScenery = () => {
  const context = React.useContext(SceneryContext)
  if (!context) {
    throw new Error('Scenery context has not been provided!')
  }
  return context
}
