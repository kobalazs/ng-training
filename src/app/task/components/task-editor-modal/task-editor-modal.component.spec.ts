import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditorModalComponent } from './task-editor-modal.component';

describe('TaskEditorModalComponent', () => {
  let component: TaskEditorModalComponent;
  let fixture: ComponentFixture<TaskEditorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskEditorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
