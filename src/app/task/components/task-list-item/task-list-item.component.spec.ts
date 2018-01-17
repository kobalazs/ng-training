import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../../shared/shared.module';
import { TaskListItemComponent } from './task-list-item.component';
import { AgePipe } from '../../pipes/age.pipe';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

describe('TaskListItemComponent', () => {
  let component: TaskListItemComponent;
  let fixture: ComponentFixture<TaskListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, ReactiveFormsModule, HttpClientModule, SharedModule ],
      declarations: [ TaskListItemComponent, AgePipe ],
      providers: [ TaskService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListItemComponent);
    component = fixture.componentInstance;
    component.task = new Task();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
