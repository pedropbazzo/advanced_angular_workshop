import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUiModule } from '../app-ui.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/book.effects';
import * as fromMedia from './reducers';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookListReduxComponent } from './components/book-list-redux/book-list-redux.component';

@NgModule({
    declarations: [ BookListReduxComponent, BookListComponent ],
    imports: [
        CommonModule,
        AppUiModule,
        EffectsModule.forFeature([ BookEffects ]),
        StoreModule.forFeature(fromMedia.mediaFeatureKey, fromMedia.reducers)
    ],
    exports: [ BookListReduxComponent, BookListComponent ]
})
export class MediaModule {
}
