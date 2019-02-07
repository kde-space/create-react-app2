# 実装メモ
## stateの形
```javascript
{
  selectedSubreddit: 'frontend',
  postsBySubreddit: {
    frontend: {
      isFetching: true,
      didInvalidate: false,
      items: []
    },
    reactjs: {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547,
      items: [
        {
          id: 42,
          title: 'FluxとRelayについての混乱'
        },
        {
          id: 500,
          title: 'React JSとFluxアーキテクチャを使って、シンプルなアプリケーションを作る'
        }
      ]
    }
  }
}
```