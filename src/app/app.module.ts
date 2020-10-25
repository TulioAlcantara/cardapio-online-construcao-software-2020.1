import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StoresListComponent } from './stores-list/stores-list.component';
import { StoresCrudComponent } from './stores-crud/stores-crud.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogCrudComponent } from './catalog-crud/catalog-crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule} from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoresListComponent,
    StoresCrudComponent,
    CatalogListComponent,
    CatalogCrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
