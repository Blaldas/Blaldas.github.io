import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsSectionComponent } from './publications-section.component';

describe('PublicationsSectionComponent', () => {
  let component: PublicationsSectionComponent;
  let fixture: ComponentFixture<PublicationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
