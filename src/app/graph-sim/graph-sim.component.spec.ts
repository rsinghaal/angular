import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSimComponent } from './graph-sim.component';

describe('GraphSimComponent', () => {
  let component: GraphSimComponent;
  let fixture: ComponentFixture<GraphSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
