# Create Book Effects
Inside the `BookListComponent` we load the books directly from the API.
In this Task we want to make use from ngrx-effects. We want to store our loaded books inside our books-state.
We also want to update our books-state if an error occured.

1. Implement the BookEffect for fetching the books from api and dispatching the belonging action for success or failure
2. Dispatch the `loadBooks` Action inside the `BookListComponent`.
3. Implement the reducer for `loadBooks`, `loadBooksSuccess`, `loadBooksFailure`
After each action the state should look like this:
   ```
   loadBooks:
   ==================
      books: {
         books: [],
         loading: true,
         error: false
       }
   ===================
      loadBooksSuccess:
   ==================
      books: {
         books: [{..},{..},{..}],
         loading: true,
         error: false
       }
   ===================
      loadBooksFailure:
   ==================
      books: {
         books: [],
         loading: false,
         error: true
       }
   ===================
   ```
4. Implement the selector for getting the books and select them eventually inside your `BookListComponent`:
   
      ```
      this.books$ = this.store.select(getBooks).
   ```

## Hints

```js
// books/selectors/book-selectors.ts

export const getBooks = createSelector(
        selectBooks,
        state => state.books
);
```

```js
// books/selectors/book-actions.ts

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
        '[Book] Load Books Failure',
        props<{ error: HttpErrorResponse }>()
);
```
