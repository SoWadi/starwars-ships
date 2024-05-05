import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipDetailComponent } from './spaceship-detail.component';

describe('SpaceshipDetailComponent', () => {
  let component: SpaceshipDetailComponent;
  let fixture: ComponentFixture<SpaceshipDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceshipDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceshipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
