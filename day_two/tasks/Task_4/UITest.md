# Test the UI of BookListComponent

Create a test which queries the books and checks if the amount of books you are expecting is rendered.
   
## Hints

```js
   const bookElements = fixture.debugElement.queryAll('/* ... */');
   const bookElements = fixture.debugElement.query(By.css('/* ... */')).children[0];
   
   expect(bookElements).toHaveLength(3);
```

