import {Degreaser} from '../interfaces/degreaser.interface';

export class DegreaserService {
  degreasers: Degreaser[] = [
    {
      image: '../../../assets/Obez.jpg',
      name: 'UV NAGELLACK 7,2 MLООООО - FIRST RAYS',
      description: 'ошринг врг чнвышпмг врэ однажды в студеную зимнюю пору я из лесу вышел был сильный мороз',
      price: '9.90 EUR'
    },
    {
      image: '../../../assets/Obez2.jpg',
      name: 'Frozen yogurt',
      description: 'ошринг врг чнвышпмг врэ',
      price: '10.90 EUR'
    },
    {
      image: '../../../assets/Obezjirevatel.png',
      name: 'UV NAGELLACK 7,2 MЗЗЗ ЗЗЗЗJJJJJJJJJJJ JJЗЗЗL - FRENCH PЛINK MEDDDDDDDIUM VAGARW NAGELLACK 7,2 ML - FRENCH PINK MEDIUM ',
      description: 'ошринг врг чнвышпмг врэ',
      price: '9.90 EUR'
    }
  ];

  constructor() {
  }

  public getProducts() {
    return this.degreasers;
  }
}
