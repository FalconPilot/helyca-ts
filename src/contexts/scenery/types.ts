type Scene<Name extends string, Params extends Record<string, unknown> | undefined = undefined> =
  Params extends undefined ? [Name] : [
    Name,
    Params,
  ]

type SceneType =
  | Scene<'title'>

type SceneryState = {
  currentScene: SceneType
}

type ContextValues = [
  SceneryState,
  {
    changeScene: (scene: SceneType) => void,
  },
]
