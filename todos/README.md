# 実装設計

## storeのstate

```js
{
  todos: [
    {
      id: 1,
      text: Reactを学ぶ,
      completed: false
    },
    {
      id: 2,
      text: Reduxを学ぶ,
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_ALL'
}
```

### visibilityFilterの種類
- `SHOW_ALL` (default)
- `SHOW_ACTIVE`
- `SHOW_COMPLETED`

