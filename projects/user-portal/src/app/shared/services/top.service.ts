import {Top} from '../interfaces/top.interface';

export class TopService {
  tops: Top[] = [
    {
      image: '../../../assets/top1.jpg',
      name: 'UV NAGELLACK 7,2 MLООООО - FIRST RAYS',
      description: 'ошринг врг чнвышпмг врэ однажды в студеную зимнюю пору я из лесу вышел был сильный мороз',
      price: '9.90 EUR'
    },
    {
      image: '../../../assets/top2.jpg',
      name: 'Frozen yogurt',
      description: 'ошринг врг чнвышпмг врэ',
      price: '10.90 EUR'
    },
    {
      image: '../../../assets/top3.jpg',
      name: 'UV NAGELLACK 7,2 MЗЗЗ ЗЗЗЗJJJJJJJJJJJ JJЗЗЗL - FRENCH PЛINK MEDDDDDDDIUM VAGARW NAGELLACK 7,2 ML - FRENCH PINK MEDIUM ',
      description: 'ошринг врг чнвышпмг врэ',
      price: '9.90 EUR'
    }
  ];

  constructor() {
  }

  public getProducts() {
    return this.tops;
  }

}
