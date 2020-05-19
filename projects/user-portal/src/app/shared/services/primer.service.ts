import {Primer} from '../interfaces/primer.interface';

export class PrimerService {
  primers: Primer[] = [
    {
      image: '../../../assets/primer1.jpg',
      name: 'UV NAGELLACK 7,2 MLООООО - FIRST RAYS',
      description: 'ошринг врг чнвышпмг врэ однажды в студеную зимнюю пору я из лесу вышел был сильный мороз',
      price: '9.90 EUR'
    },
    {
      image: '../../../assets/primer2.png',
      name: 'UV NAGELLACK 7,2 MЗЗЗ ЗЗЗЗJJJJJJJJJJJ JJЗЗЗL - FRENCH PЛINK MEDDDDDDDIUM VAGARW NAGELLACK 7,2 ML - FRENCH PINK MEDIUM ',
      description: 'ошринг врг чнвышпмг врэ',
      price: '9.90 EUR'
    },
    {image: '../../../assets/primer3.png', name: 'Frozen yogurt', description: 'ошринг врг чнвышпмг врэ', price: '10.90 EUR'},
    {
      image: '../../../assets/primer4.png',
      name: 'UV NAGELLACK 7,2 ML - FRENCH PINK MEDIUM',
      description: 'ошринг врг чнвышпмг врэ',
      price: '9.90 EUR'
    }
  ];

  constructor() {
  }

  public getProducts() {
    return this.primers;
  }
}
