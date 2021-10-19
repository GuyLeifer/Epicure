import { Component, OnInit } from '@angular/core';
import { CardsDataService } from 'src/app/services/cards-data.service';
import { Cards } from 'src/app/types/card';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  constructor( private CardsDataService: CardsDataService ) { }
  
  cards: Cards[] = this.CardsDataService.getcards();

  ngOnInit(): void {
  }

}
