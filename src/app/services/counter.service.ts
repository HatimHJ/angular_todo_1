import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private _count: number = 0;

  public getCount(): number {
    return this._count;
  }

  public incNumber(): void {
    this._count++;
  }
}
