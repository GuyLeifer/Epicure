import { Component, OnInit } from '@angular/core';
import { WeeklyChefService } from 'src/app/services/weekly-chef.service';
import { Chef } from 'src/app/types/chef';

@Component({
  selector: 'app-weekly-chef',
  templateUrl: './weekly-chef.component.html',
  styleUrls: ['./weekly-chef.component.scss']
})
export class WeeklyChefComponent implements OnInit {

  constructor( private WeeklyChefService: WeeklyChefService ) { }

  chef: Chef = this.WeeklyChefService.getWeeklyChef();

  ngOnInit(): void {
  }

}
