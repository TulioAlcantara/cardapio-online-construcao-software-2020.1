import { TestBed } from "@angular/core/testing";
import { CatalogService } from "./catalog.service";

//FIREBASE
import { AngularFirestore } from "@angular/fire/firestore";

describe("CatalogService", () => {
  let service: CatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFirestore, useValue: {} }],
    });
    service = TestBed.inject(CatalogService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
