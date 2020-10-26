import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { StoreCatalogComponent } from "./store-catalog/store-catalog.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "store", component: StoreCatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
