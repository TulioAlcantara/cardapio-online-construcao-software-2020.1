import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StoreCatalogComponent } from "./store-catalog.component";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

//MATERIAL
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

//FIREBASE
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";

describe("StoreCatalogComponent", () => {
  let component: StoreCatalogComponent;
  let fixture: ComponentFixture<StoreCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreCatalogComponent],
      imports: [MatDialogModule, RouterTestingModule],
      providers: [
        MatDialog,
        { provide: AngularFirestore, useValue: {} },
        { provide: AngularFireStorage, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
