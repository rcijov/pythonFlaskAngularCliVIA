import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ViaComponent } from './via.component';

describe('ViaComponent', () => {
  let component: ViaComponent;
  let fixture: ComponentFixture<ViaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
