import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/book.effects';
import * as fromBook from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([BookEffects]),
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducers),
  ]
})
export class BookModule { }
