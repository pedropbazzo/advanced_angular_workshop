# Query and Test LandingPage 

1. Visit the landing Page
2. Check if the header contains 'NgRx Rockz'
3. Validate the Count of the BookItems that are displayed

Bonus:
4. Also validate the content of the BookItem that are displayed

## Hint
```ecmascript 6
        cy.visit('...');
        cy.get('..').should('contain', '...');

        cy.get('...').should('have.length', "")
```
