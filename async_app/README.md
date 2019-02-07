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

## action
- `REQUEST_POSTS`
  - サブレディットの投稿を取得
- `RECEIVE_POSTS`
  - サブレディットの投稿取得の受け取り
- `SELECT_SUBREDDIT`
  - 板の選択
- `INVALIDATE_SUBREDDIT`
  - 再読み込み