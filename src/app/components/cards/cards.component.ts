import { Component, OnInit, Input } from '@angular/core';
import { Cards } from 'src/app/types/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() cards?: Cards;
  
  constructor() { }

  ngOnInit(): void {
  }

}
