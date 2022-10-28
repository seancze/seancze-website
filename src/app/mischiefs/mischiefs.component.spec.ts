import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MischiefsComponent } from './mischiefs.component';

describe('MischiefsComponent', () => {
  let component: MischiefsComponent;
  let fixture: ComponentFixture<MischiefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MischiefsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MischiefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
