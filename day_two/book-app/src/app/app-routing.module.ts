import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListReduxComponent } from './media/components/book-list-redux/book-list-redux.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BookListReduxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
