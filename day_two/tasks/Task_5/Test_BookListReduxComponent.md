# Test BookListReduxComponent

## First scenario
1. Mock the Store with the Helperfunction `provideMockStore` and set an initialState
2. Test if the BookListReduxComponent Property `books$` gets the correct Array from the initialState

## Second scenario
1. Mock the Store with the Helperfunction `provideMockStore` and override the `getBook` Selector
2. Test if the BookListReduxComponent Property `books$` gets the correct Array you set inside the resultSelector


## Hints

```js
    providers: [
        // provideMockStore({ initialState})
        // provideMockStore()
        ]

   mockBooksSelector = store.overrideSelector(getBooks, []);
   mockBooksSelector.setResult(book);
```

