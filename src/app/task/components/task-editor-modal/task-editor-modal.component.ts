import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Task } from './../../models/task';

@Component({
  selector: 'app-task-editor-modal',
  templateUrl: './task-editor-modal.component.html',
  styleUrls: ['./task-editor-modal.component.css']
})
export class TaskEditorModalComponent implements OnInit {

  public constructor(
    public dialogRef: MatDialogRef<TaskEditorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task
  ) {
    //
  }

  public ngOnInit() {
    //
  }

  public discard(): void {
    this.dialogRef.close();
  }

}
