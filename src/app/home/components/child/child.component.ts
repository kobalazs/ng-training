import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public childBasket = 'A handful of shining yellow apples.';
  @Output() public childBasketChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public changeApples() {
    this.childBasket = 'A handful of shining yellow apples.';
    this.childBasketChange.emit(this.childBasket);
  }

}
