import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SingleComponent } from './single/single.component';
import { SharedModule } from '../shared/shared.module';
import { TFormComponent } from './t-form/t-form.component';

const routes: Routes = [
  {
      path:'', component: MoviesComponent,
  },
  {
    path: 'news', pathMatch: 'full', component: MoviesComponent
  },
  {
    path: 'news/:id',
    component: SingleComponent
  },
  {
    path: 'tform',
    component: TFormComponent
  }
]

@NgModule({
  declarations: [
    MoviesComponent,
    SingleComponent,
    TFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [
    RouterModule,
    MoviesComponent,
    TFormComponent,
    SingleComponent
  ]
})

export class PagesModule { }
