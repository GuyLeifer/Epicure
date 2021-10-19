import { Injectable } from '@angular/core';
import { Cards } from '../types/card';


@Injectable({
  providedIn: 'root'
})
export class CardsDataService {

  constructor() { }

  getcards(): Cards[] {
    return [
      {
        title: "THE POPULAR RESTAURANTS IN EPICURE :",
        cards: [
          {
            image: "./../../../assets/claro.png",
            subTitle: "Claro",
            content: "Ran Shmueli"
          },
          {
            image: "./../../../assets/mizlala-gret-mullet-fillet.png",
            subTitle: "Lumina",
            content: "Meir Adoni"
          },
          {
            image: "./../../../assets/tiger-lili.png",
            subTitle: "Tiger Lilly",
            content: "Yanir Green"
          }
        ],
        link: "All Restaurants"
      }, 
      {
        title: "SIGNATURE DISH OF :",
        cards: [
          {
            title: "Tiger Lilly",
            image: "./../../../assets/pad-ki-mao.png",
            subTitle: "Pad Ki Mao",
            content: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
            subIcon: "./../../../assets/pad-subIcon.svg",
            price: 88,
          },
          {
            title: "Kab Kem",
            image: "./../../../assets/kab-kem.png",
            subTitle: "Garbanzo Frito",
            content: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
            price: 98,
          },
          {
            title: "Popina",
            image: "./../../../assets/popina.png",
            subTitle: "Smoked Pizza",
            content: 'Basil dough, cashew "butter", demi-glace, bison & radish',
            subIcon: "./../../../assets/pizza-subIcon.svg",
            price: 65,
          }
        ],
      }, 
      {
        title: "THE MEANING OF OUR ICONS :",
        cards: [
          {
            content: "Spicy",
            icon: "./../../../assets/pad-subIcon.svg",
            isIcon: true
          },
          {
            content: "Vegitarian",
            icon: "./../../../assets/vegeterian-icon.svg",
            isIcon: true
          },
          {
            content: "Vegan",
            icon: "./../../../assets/pizza-subIcon.svg",
            isIcon: true
          }
        ],
        meaning: true,
      },
    ];
  }
}
