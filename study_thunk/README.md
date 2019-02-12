# 完成版


# 実装設計

## state (store)
```js
{
  tags: {
    tagAll: ['react', 'vue', 'angular'],
    isFetching: false,
    isError: {
      status: false,
      error: null
    },
    selectedTag: 'react',
  },
  tagDatas: {
    react: {
      isFetching: false,
      isError: {
        status: false,
        error: null
      },
      shouldUpdate: false,
      lastUpdated: 137983721
      responseData: {
        "followers_count": 298,
        "icon_url": "https://s3-ap-northeast-1.amazonaws.com/qiita-tag-image/e6867d326364bb2498f72f152c92408bf457de8c/medium.jpg?1426679594",
        "id": "react.js",
        "items_count": 262
      }
    }
  }
}
```

初期state
```js
{
  tags: {
    tagAll: [],
    isFetching: false,
    isError: {
      status: false,
      error: null
    },
    selectedTag: ''
  },
  tagDatas: {}
}
```

## action
- `REQUEST_TAGS`
  - タグ一覧をリクエスト
- `RECEIVE_TAGS`
  - タグ一覧を受け取り
- `SELECT_TAG`
  - タグを選択
- `REQUEST_TAG_DATA`
  - タグの詳細情報をリクエスト
- `RECEIVE_TAG_DATA`
  - タグの詳細情報を受け取り
- `REFRESH_TAG_DATA`
  - タグの情報を再読み込み
- `FAIL_REQUEST_TAGS`
  - タグ一覧のリクエスト失敗
- `FAIL_REQUEST_TAG_DATA`
  - タグの詳細情報のリクエスト失敗
