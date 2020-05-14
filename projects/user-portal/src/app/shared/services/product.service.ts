export interface Item {
  image: string;
  name: string;
  description: string;
  price: string;
}

export class ProductService {
  items: Item[] = [
    {
      image: '../../../assets/pink-polish.png',
      name: 'UV NAGELLACK 7,2 MLООООО - FIRST RAYS',
      description: 'ошринг врг чнвышпмг врэ однажды в студеную зимнюю пору я из лесу вышел был сильный мороз',
      price: '9.90 EUR'
    },
    {image: '../../../assets/polish.png', name: 'Frozen yogurt', description: 'ошринг врг чнвышпмг врэ', price: '10.90 EUR'},
    {
      image: '../../../assets/pink-polish.png',
      name: 'UV NAGELLACK 7,2 MЗЗЗ ЗЗЗЗJJJJJJJJJJJ JJЗЗЗL - FRENCH PЛINK MEDDDDDDDIUM VAGARW NAGELLACK 7,2 ML - FRENCH PINK MEDIUM ',
      description: 'ошринг врг чнвышпмг врэ',
      price: '9.90 EUR'
    },
    {image: '../../../assets/polish.png', name: 'Frozen yogurt', description: 'ошринг врг чнвышпмг врэ', price: '10.90 EUR'},
    {
      image: '../../../assets/pink-polish.png',
      name: 'UV NAGELLACK 7,2 ML - FRENCH PINK MEDIUM',
      description: 'ошринг врг чнвышпмг врэ',
      price: '9.90 EUR'
    },
    {
      image: '../../../assets/polish.png',
      name: 'UV NAGELLACK 7,2 ML - FIRST RAYS',
      description: 'чебурашка в чебуречноц зодит по магазу',
      price: '10.90 EUR'
    },
    {image: '../../../assets/pink-polish.png', name: 'Frozen yogurt', description: 'ошринг врг чнвышпмг врэ', price: '9.90 EUR'},
    {
      image: '../../../assets/polish.png',
      name: 'UV NAGELLACK 7,2 ML - FRENCH PINK MEDIUM',
      description: 'Ce masque fibre épouse parfaitement les contours' +
        ' du visage. Il retient une très forte concentration d’actifs' +
        ' et optimise leur diffusion à travers l’épiderme. Idéal pour' +
        ' atténuer les signes de fatigue, réveiller votre peau et l’hydrater en profondeur.',
      price: '10.90 EUR'
    },
  ];

  constructor() {
  }

  public getProducts() {
    return this.items;
  }
}
