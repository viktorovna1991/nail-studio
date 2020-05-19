import {Base} from '../interfaces/base.interface';

export class BaseService {
  bases: Base[] = [
    {
      image: '../../../assets/base1.jpg',
      name: 'UV NAGELLACK 7,2 MLООООО - FIRST RAYS',
      description: 'ошринг врг чнвышпмг врэ однажды в студеную зимнюю пору я из лесу вышел был сильный мороз',
      price: '9.90 EUR'
    },
    {
      image: '../../../assets/base2.jpg',
      name: 'Frozen yogurt',
      description: 'ошринг врг чнвышпмг врэ',
      price: '10.90 EUR'
    },
    {
      image: '../../../assets/base3.png',
      name: 'UV NAGELLACK 7,2 MLООООО - FIRST RAYS',
      description: 'ошринг врг чнвышпмг врэ однажды в студеную зимнюю пору я из лесу вышел был сильный мороз',
      price: '9.90 EUR'
    },
    {
      image: '../../../assets/base4.jpg',
      name: 'Frozen yogurt',
      description: 'ошринг врг чнвышпмг врэ',
      price: '10.90 EUR'
    },
    {
      image: '../../../assets/base5.png',
      name: 'UV NAGELLACK 7,2 MLООООО - FIRST RAYS',
      description: 'ошринг врг чнвышпмг врэ однажды в студеную зимнюю пору я из лесу вышел был сильный мороз',
      price: '9.90 EUR'
    }
  ];

  constructor() {
  }

  public getProducts() {
    return this.bases;
  }

}
