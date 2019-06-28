import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  @Input() public grandchildBasket = 'A dozen of tasteful green apples.';
  @Output() public grandchildBasketChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public changeApples() {
    this.grandchildBasket = 'A dozen of tasteful green apples.';
    this.grandchildBasketChange.emit(this.grandchildBasket);
  }

}
