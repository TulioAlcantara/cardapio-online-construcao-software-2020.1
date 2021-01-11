import { TestBed } from "@angular/core/testing";
import { StoreService } from "./store.service";

//FIREBASE
import { AngularFirestore } from "@angular/fire/firestore";

describe("StoreService", () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AngularFirestore, useValue: {} }],
    });
    service = TestBed.inject(StoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
