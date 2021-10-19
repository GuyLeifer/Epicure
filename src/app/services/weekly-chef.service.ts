import { Injectable } from '@angular/core';
import { Chef } from '../types/chef';

@Injectable({
  providedIn: 'root'
})
export class WeeklyChefService {

  getWeeklyChef(): Chef {
    return {
      name: "Yossi Shitrit",
      image: "./../../../assets/yossi-shitrit.png",
      content: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
      cards: [
        {
          image: "./../../../assets/onza-res.png",
          subTitle: "Onza"
        },
        {
          image: "./../../../assets/kitchen-res.png",
          subTitle: "Kitchen Market"
        },
        {
          image: "./../../../assets/mashye-res.png",
          subTitle: "Mashya"
        },
      ]
    }
  }

  constructor() { }
}
