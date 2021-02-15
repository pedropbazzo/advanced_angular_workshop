import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { AppUiModule } from '../app-ui.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/book.effects';
import * as fromMedia from './reducers';

@NgModule({
    declarations: [BookListComponent],
    imports: [
        CommonModule,
        AppUiModule,
        EffectsModule.forFeature([BookEffects]),
        StoreModule.forFeature(fromMedia.mediaFeatureKey, fromMedia.reducers)
    ],
    exports: [BookListComponent]
})
export class MediaModule {
}
