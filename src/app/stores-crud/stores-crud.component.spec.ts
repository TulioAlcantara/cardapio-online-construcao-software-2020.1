import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresCrudComponent } from './stores-crud.component';

describe('StoresCrudComponent', () => {
  let component: StoresCrudComponent;
  let fixture: ComponentFixture<StoresCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
