import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreCatalogComponent } from '../app/components/store-catalog/store-catalog.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: ':id', component: StoreCatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
