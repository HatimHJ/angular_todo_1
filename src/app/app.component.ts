import { Component } from '@angular/core';
import { TodoApiService } from './services/todo/todo-api.service';
import { CounterService } from './services/counter.service';
import { todo } from './services/todo/todo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: todo[] = [];
  count: number = 0;
  constructor(
    private todoApiService: TodoApiService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.todoApiService.getData().subscribe((res: any) => {
      this.data = res;
    });
  }

  addCounter() {
    this.counterService.incNumber();
    this.count = this.counterService.getCount();
  }

  toggleTask(todo: todo) {
    this.data.filter((item) => {
      if (item.id == todo.id) {
        item.completed = !item.completed;
      }
    });
  }
}
