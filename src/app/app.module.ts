//ANGULAR
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { StoreCatalogComponent } from "./components/store-catalog/store-catalog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CheckoutModalComponent } from "./components/checkout-modal/checkout-modal.component";

//MATERIAL
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

//FONT AWESOME
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

//FIREBASE
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "../environments/environment";
import { IndexComponent } from "./components/index/index.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoreCatalogComponent,
    CheckoutModalComponent,
    IndexComponent,
  ],
  imports: [
    //ANGULAR
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    //MATERIAL
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,

    //FONT AWESOME
    FontAwesomeModule,

    //ANGULAR
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    // AngularFireStorageModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
