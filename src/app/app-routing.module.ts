import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StoreCatalogComponent } from "../app/components/store-catalog/store-catalog.component";

const routes: Routes = [
  { path: "store", component: StoreCatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
