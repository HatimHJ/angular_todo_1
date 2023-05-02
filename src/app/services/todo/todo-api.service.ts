import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
  constructor(private htpp: HttpClient) {}

  getData() {
    return this.htpp.get(this.apiUrl);
  }
}
