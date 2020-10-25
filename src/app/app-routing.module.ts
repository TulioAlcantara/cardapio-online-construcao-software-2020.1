import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { StoresListComponent } from "./stores-list/stores-list.component";
import { StoresCrudComponent } from "./stores-crud/stores-crud.component";
import { CatalogListComponent } from "./catalog-list/catalog-list.component";
import { CatalogCrudComponent } from "./catalog-crud/catalog-crud.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "lojas", component: StoresListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
