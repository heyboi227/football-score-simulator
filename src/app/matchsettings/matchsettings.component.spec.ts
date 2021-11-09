import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchsettingsComponent } from './matchsettings.component';

describe('MatchsettingsComponent', () => {
  let component: MatchsettingsComponent;
  let fixture: ComponentFixture<MatchsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchsettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
