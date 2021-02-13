# Create NgRx Feature Book
1. Create the ngrx-feature book and its belonging building blocks `reducer, selector, actions, effects`
2. Default State of book should look like:
    ```
        books: [],
        loading: false
    ```
3. Make sure your state is initialized correctly by checking ReduxDevTools in Chrome

## Hints

```
ng generate feature media --m book.module.ts --group --api
ng generate store media -m book.module.ts
```

```js
// book/reducres/index.ts

export const bookFeatureKey = 'book';

export interface State {
    books: fromBook.State;
}

export const reducers: ActionReducerMap<State> = {
    books: fromBook.reducer
};
```

```
{
  book: {
    books: {
      books: [],
      loading: false
    }
  }
}
```
