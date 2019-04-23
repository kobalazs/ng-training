import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TaskService } from 'src/app/task/services/task.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public constructor(public authService: AuthService, public taskService: TaskService) {
    //
  }

  public ngOnInit() {
    //
  }

  public search(searchTerm: string) {
    this.taskService.searchTerm = searchTerm;
    this.taskService.load();
  }

}
