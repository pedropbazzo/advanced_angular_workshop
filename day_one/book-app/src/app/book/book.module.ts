import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from './components/book-list/book-list.component';
import {AppUiModule} from '../app-ui.module';

@NgModule({
    declarations: [BookListComponent],
    imports: [
        CommonModule,
        AppUiModule
    ],
    exports: [BookListComponent]
})
export class BookModule {
}
