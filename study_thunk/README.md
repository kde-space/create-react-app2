# 実装設計

## state (store)
```js
{
  tags: ['react', 'vue', 'angular'],
  selectedTag: 'react',
  isFetching: false,
  isError: false,
  tagDatas: {
    react: {
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
  tags: [],
  selectedTag: '',
  isFetching: false,
  isError: false,
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