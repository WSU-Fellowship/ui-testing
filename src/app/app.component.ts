import { Component } from '@angular/core';
import { Operation } from './models/operation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num1: number|null = null;
  num2: number|null  = null;
  result: number|null = null;
  title = 'Catculator';
  
  public add(): void {
    this.calculate(Operation.add);
  }

  public subtract(): void {
    this.calculate(Operation.subtract);
  }

  public multiply(): void {
    this.calculate(Operation.multiply);
  }

  public divide(): void {
    this.calculate(Operation.divide);
  }

  private calculate(operation: Operation): void {
    if (this.num1 && this.num2) {
      switch(operation) {
        case Operation.add: {
          this.result = this.num1 + this.num2;
          break;
        }
        case Operation.subtract: {
          this.result = this.num1 - this.num2;
          break;
        }
        case Operation.multiply: {
          this.result = this.num1 * this.num2;
          break;
        }
        case Operation.divide: {
          this.result = this.num1 / this.num2;
          break;
        }
        default: {
          break;
        }
      }
    }
  }
}
