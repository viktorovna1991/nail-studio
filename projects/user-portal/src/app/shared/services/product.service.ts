import {Item} from '../interfaces/item.interface';
import {BehaviorSubject} from 'rxjs';

export class ProductService {
  public currentItemsSource = new BehaviorSubject<Item[]>(null);
  public currentItems = this.currentItemsSource.asObservable();
  items: Item[] = [
    {
      id: 1,
      image: '../../../assets/pink-polish.png',
      name: 'UV NAGELLACK 7,2 MLООООО - FIRST RAYS',
      description: 'ошринг врг чнвышпмг врэ однажды в студеную зимнюю пору я из лесу вышел был сильный мороз',
      price: 9.90,
      quantity: 1
    },
    {id: 2, image: '../../../assets/polish.png', name: 'Frozen yogurt', description: 'ошринг врг чнвышпмг врэ', price: 10.90, quantity: 1},
    {
      id: 3,
      image: '../../../assets/pink-polish.png',
      name: 'UV NAGELLACK 7,2 MЗЗЗ ЗЗЗЗJJJJJJJJJJJ JJЗЗЗL - FRENCH PЛINK MEDDDDDDDIUM VAGARW NAGELLACK 7,2 ML - FRENCH PINK MEDIUM ',
      description: 'ошринг врг чнвышпмг врэ',
      price: 3.20,
      quantity: 1
    },
    {id: 4, image: '../../../assets/polish.png', name: 'Frozen yogurt', description: 'ошринг врг чнвышпмг врэ', price: 10.90, quantity: 1},
    {
      id: 5,
      image: '../../../assets/pink-polish.png',
      name: 'UV NAGELLACK 7,2 ML - FRENCH PINK MEDIUM',
      description: 'ошринг врг чнвышпмг врэ',
      price: 9.90,
      quantity: 1
    },
    {
      id: 6,
      image: '../../../assets/polish.png',
      name: 'UV NAGELLACK 7,2 ML - FIRST RAYS',
      description: 'чебурашка в чебуречноц зодит по магазу',
      price: 14.60,
      quantity: 1
    },
    {
      id: 7,
      image: '../../../assets/pink-polish.png',
      name: 'Frozen yogurt',
      description: 'ошринг врг чнвышпмг врэ',
      price: 4.90,
      quantity: 1
    },
    {
      id: 8,
      image: '../../../assets/polish.png',
      name: 'UV NAGELLACK 7,2 ML - FRENCH PINK MEDIUM',
      description: 'Ce masque fibre épouse parfaitement les contours' +
        ' du visage. Il retient une très forte concentration d’actifs' +
        ' et optimise leur diffusion à travers l’épiderme. Idéal pour' +
        ' atténuer les signes de fatigue, réveiller votre peau et l’hydrater en profondeur.',
      price: 10.90,
      quantity: 1
    },
  ];

  constructor() {
  }

  public getProducts() {
    return this.items;
  }

  public addProductToBasket(product: any) {
    localStorage.setItem('product', JSON.stringify(product));
  }

  public getProductFromBasket() {
    return JSON.parse(localStorage.getItem('product'));
  }

  public removeAllProductsFromBasket() {
    return localStorage.removeItem('product');
  }


}
