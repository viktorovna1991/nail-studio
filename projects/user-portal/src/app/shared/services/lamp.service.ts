import {Lamp} from '../interfaces/lamp.interface';

export class LampService {
  uvLamps: Lamp[] = [
    {
      image: '../../../assets/uvLamp1.jpg',
      name: 'УФ лампа для сушки шеллака SK-818',
      description: 'УФ Лампа, красная SK-818, матовая, 36 вт (4*9 вт) таймер 120 сек., съёмная нижняя панель\n. ' +
        'Качественная профессиональная ультрафиолетовая лампа мощностью 36 Ватт 220v',
      price: '24.00 EUR'
    },
    {
      image: '../../../assets/uvLamp2.jpg',
      name: 'УФ лампа для сушки ногтей',
      description: 'Уф лампа (тоннель) имеет 4 лампы по 9 Ватт. таймер на 2 минуты и режим бесконечность. Стабильный ультрафиолетовый свет.' +
        ' Помимо металлического зеркального отражателя УФ лампа имеет выдвижное дно с зеркальной поверхностью. ',
      price: '30.40 EUR'
    }
  ];

  ledLamps: Lamp[] = [
    {
      image: '../../../assets/ledLamp1.jpg',
      name: 'Лампа Led мини светодиодная 9W арка SA-4104White Molecule SPA\n',
      description: 'LED –лампа mini предназначена для ' +
        'полимеризации все видов гелей для наращивания ногтей,' +
        ' а так же для всех видов гель-лаков. Подходит как для домашнего,' +
        ' так и для профессионального использования. Лампа Molecule Professional ' +
        'предназначена для выполнения маникюра и педикюра. Использование передовых ' +
        'материалов и новейших светодиодов при изготовлении лампы делает её' +
        ' экологически чистой и обеспечивает длительный срок службы – до 50 000 часов.',
      price: '23.00 EUR'
    },
    {
      image: '../../../assets/ledLamp2.jpg',
      name: 'LED лампа для ногтей, Amore Shop "Сердце" 3ВТ, розовая',
      description: 'Изящная и стильная LED-лампа серии предназначена для ' +
        'полимеризации LED-гелей, гель-лаков, УФ-лаков и других LED-отверждаемых ' +
        'материалов. Стильный дизайн в форме сердца и удобный простой функционал позволяют' +
        ' занять прибору достойное ' +
        'место в ряду LED-ламп для домашнего использования.',
      price: '15.00 EUR'
    }
  ];

  uvLedLamps: Lamp[] = [
    {
      image: '../../../assets/uvLedLamp1.jpg',
      name: 'Лампа гибридная UV/LED, розовая, SUN 9C PLUS, 36W\n',
      description: 'Лампа гибридная SUN 9C PLUS UV/LED с таймером на 30,' +
        ' 60 секунд. Эта лампа нового поколения изготовлена по новейшим' +
        ' технологиям и последним разработкам, модель предназначена как' +
        ' для профессионального, так и для домашнего использования. Преимущество ' +
        'использования данной лампы заключается в высокой скорости полимеризации.',
      price: '75.00 EUR'
    },
    {
      image: '../../../assets/uvLedLamp2.jpg',
      name: 'Лампа гибридная розовая SUN ONE, 24W/48W UV/LED с таймером',
      description: ' LED технология позволяет экономить на электричестве до ' +
        '10 раз! Лампа предназначена для полимеризации всех видов гелей' +
        ' для наращивания ногтей, а так же для всех видов гель-лаков.',
      price: '95.00 EUR'
    },
    {
      image: '../../../assets/uvLedLamp3.jpg',
      name: 'Лампа гибридная UV/LED, белая, 24W, Soline SUNmini 3 PLUS',
      description: ' Эта лампа нового поколения изготовлена' +
        ' по новейшим технологиям и последним разработкам,' +
        ' модель предназначена как для профессионального, так и для ' +
        'домашнего использования. Преимущество использования данного прибора ' +
        'заключается в высокой скорости полимеризации всех видов гелей и гель-лаков (UV/LED).',
      price: '60.34 EUR'
    },
    {
      image: '../../../assets/uvLedLamp4.jpg',
      name: 'Лампа гибридная розовая Soline SUN9X, 36W UV/LED',
      description: ' Эта лампа нового поколения изготовлена' +
        ' по новейшим технологиям и последним разработкам,' +
        ' модель предназначена как для профессионального, так и для ' +
        'домашнего использования. Преимущество использования данного прибора ' +
        'заключается в высокой скорости полимеризации всех видов гелей и гель-лаков (UV/LED).',
      price: '50.34 EUR'
    },

  ];

  constructor() {
  }

  public getUvLamps() {
    return this.uvLamps;
  }

  public getLedLamps() {
    return this.ledLamps;
  }

  public getUvLedLamps() {
    return this.uvLedLamps;
  }
}
