import * as fromBook from '../reducers/book.reducer';
import { selectMediaState } from './book.selectors';

describe('Book Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMediaState({
      [fromBook.bookFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
