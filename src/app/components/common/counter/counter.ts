import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  public count: number = 0;

  @Output() changeCounter: EventEmitter<number> = new EventEmitter();

  onCounterChange() {
    this.changeCounter.emit(this.count);
  }


  increment() {
    this.count += 1;
    this.onCounterChange();
  }

  decrement() {
    this.count -= 1;
    this.onCounterChange();
  }

  reset() {
    this.count = 0;
    this.onCounterChange();
  }
}
