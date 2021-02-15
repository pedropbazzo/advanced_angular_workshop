# Mock Http Backend Call

## Test Scenario
1. Create the fixture for the Response Object
2. Intercept the API-Call with your created Fixture
3. Visit the landing page
4. Check if first book title displayed is from the first book in your mocked Response


## Hint

Think about good selectors for the Input-Field, the Button and the Textarea.

```ecmascript 6
cy.intercept('GET', 'http://localhost:4730/books', {fixture: 'books.json'}).as('apiCheck');

cy.wait('@apiCheck').then(() => {
    // assertion of booktitle here
})

```
