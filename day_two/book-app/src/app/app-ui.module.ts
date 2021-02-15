import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatListModule,
        MatTabsModule
    ],
})
export class AppUiModule {
}
