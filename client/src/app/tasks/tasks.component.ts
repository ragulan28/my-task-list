import {Component, OnInit} from '@angular/core';
import {TaskService} from "./task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) {
    this.taskService.getTask()
      .subscribe(tasks => {
        console.log(tasks);
      });
  }

  ngOnInit() {
  }

}
