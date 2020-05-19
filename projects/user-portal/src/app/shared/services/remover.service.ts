import {Remover} from '../interfaces/remover.interface';

export class RemoverService {
  removers: Remover[] = [
    {
      image: '../../../assets/remover1.jpg',
      name: 'UV NAGELLACK 7,2 MLООООО - FIRST RAYS',
      description: 'ошринг врг чнвышпмг врэ однажды в студеную зимнюю пору я из лесу вышел был сильный мороз',
      price: '9.90 EUR'
    },
    {
      image: '../../../assets/remover2.jpg',
      name: 'UV NAGELLACK 7,2 MЗЗЗ ЗЗЗЗJJJJJJJJJJJ JJЗЗЗL - FRENCH PЛINK MEDDDDDDDIUM VAGARW NAGELLACK 7,2 ML - FRENCH PINK MEDIUM ',
      description: 'ошринг врг чнвышпмг врэ',
      price: '19.30 EUR'
    },
    {image: '../../../assets/remover3.png', name: 'Frozen yogurt', description: 'ошринг врг чнвышпмг врэ', price: '10.90 EUR'},
    {
      image: '../../../assets/remover4.png',
      name: 'UV NAGELLACK 7,2 ML - FRENCH PINK MEDIUM',
      description: 'ошринг врг чнвышпмг врэ',
      price: '1.90 EUR'
    },
    {
      image: '../../../assets/remover5.png',
      name: 'UVL - FRENCH PINK MEDIUM',
      description: 'ошрингоднажды в зеленый вечер врг чнвышпмг врэ',
      price: '4.90 EUR'
    }
  ];

  constructor() {
  }

  public getProducts() {
    return this.removers;
  }

}
