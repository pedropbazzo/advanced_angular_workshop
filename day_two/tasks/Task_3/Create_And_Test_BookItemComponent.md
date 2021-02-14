# Create BookItemComponent and Test the BookListcomponent

1. Create a `BookItemComponent` which get a book via Input Decorator and use it as a child component inside the `BookListComponent`
2. To test the `BookListComponent` you need to create a mock/ stub for `BookItemComponent` and for `BookDataService`.
    3. Test if the books$ Observable contains the books you return in your `BookDataServiceStub`
    4. Test if the Method `getBooks()` was called after the `BookListComponent` was initialized.
   
## Hints

```js
@Component({
 selector: 'app-book-item',
 template: `<div></div>`,
})
export class BookItemDummyComponent {
	@Input() book: Book;
}
```

```js
spuOn
expect().toBeCalled
```
