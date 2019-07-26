import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'single/:id', loadChildren: './single/single.module#SinglePageModule' },
  { path: 'categories/:id', loadChildren: './categories/categories.module#CategoriesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
