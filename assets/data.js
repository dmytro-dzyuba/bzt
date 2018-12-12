var data = [
    {
        id: 1,
        name: 'СаблезубыйДемон',
        win: true,
        date: '22.01.2018',
        rate: '30/22'
    },
    {
        id: 2,
        name: 'D и k a я МяTa',
        win: false,
        date: '02.02.2018',
        rate: '3/22'
    },
    {
        id: 3,
        name: 'БоЕвАя Русь2',
        win: false,
        date: '06.02.2018',
        rate: '6/6'
    },
    {
        id: 4,
        name: 'БАГРАТИОН',
        win: true,
        date: '10.02.2018',
        rate: '22/8'
    },
    {
        id: 5,
        name: 'NIGHT WOLVES',
        win: true,
        date: '26.02.2018',
        rate: '28/25'
    },
    {
        id: 6,
        name: 'InvincibLegion',
        win: false,
        date: '02.03.2018',
        rate: '2/29'
    },
    {
        id: 7,
        name: '9 звезд',
        win: true,
        date: '09.03.2018',
        rate: '27/9'
    },
    {
        id: 8,
        name: 'Спарта 2017',
        win: true,
        date: '13.03.2018',
        rate: '30/0'
    },
    {
        id: 9,
        name: 'СаблезубыйДемон',
        win: true,
        date: '20.03.2018',
        rate: '30/27'
    },
    {
        id: 10,
        name: 'ЦыпаГриль',
        win: false,
        date: '27.03.2018',
        rate: '21/21'
    },
    {
        id: 11,
        name: 'СаблезубыйДемон2',
        win: true,
        date: '03.04.2018',
        rate: '24/6'
    },
    {
        id: 12,
        name: '9 звезд',
        win: true,
        date: '17.04.2018',
        rate: '30/18'
    },
    {
        id: 13,
        name: 'Крылатые ангелы',
        win: true,
        date: '22.05.2018',
        rate: '12/12'
    },
    {
        id: 14,
        name: 'Клан МилеDи',
        win: true,
        date: '26.05.2018',
        rate: '30/6'
    },
    {
        id: 15,
        name: 'БОЕВАЯ ЭЛИТА',
        win: true,
        date: '29.05.2018',
        rate: '30/30'
    },
    {
        id: 16,
        name: 'Белые Ночи в СПб',
        win: true,
        date: '02.06.2018',
        rate: '30/5'
    },
    {
        id: 17,
        name: 'ПИСЕЦВАМ',
        win: true,
        date: '05.06.2018',
        rate: '27/10'
    },
    {
        id: 18,
        name: 'SEVEROVOLK',
        win: true,
        date: '09.06.2018',
        rate: '29/10'
    },
    {
        id: 19,
        name: 'Думай Головой',
        win: true,
        date: '12.06.2018',
        rate: '30/3'
    },
    {
        id: 20,
        name: 'РoССиЯ ВeЛuКaЯ',
        win: true,
        date: '18.06.2018',
        rate: '30/12'
    },
    {
        id: 21,
        name: 'Крылатые Ангелы',
        win: true,
        date: '23.06.2018',
        rate: '30/16'
    },
    {
        id: 22,
        name: 'Воины Чести',
        win: true,
        date: '???',
        rate: '???'
    },
    {
        id: 23,
        name: 'БОЕВАЯ ЭЛИТА',
        win: true,
        date: '26.06.2018',
        rate: '30/17'
    },
    {
        id: 24,
        name: 'Ф Е О Д А Л',
        win: true,
        date: '03.07.2018',
        rate: '29/15'
    },
    {
        id: 25,
        name: 'ЭКСТРЕМАЛЫ Next',
        win: true,
        date: '31.07.2018',
        rate: '30/6'
    },
    {
        id: 26,
        name: 'Путешественникъ',
        win: true,
        date: '04.08.2018',
        rate: '30/0'
    },
    {
        id: 27,
        name: '7Парус7',
        win: true,
        date: '01.09.2018',
        rate: '27/16'
    },
    {
        id: 28,
        name: 'Щит Империи',
        win: true,
        date: '04.09.2018',
        rate: '30/1'
    },
    {
        id: 29,
        name: 'Крутые Воины',
        win: true,
        date: '11.09.2018',
        rate: '29/13'
    },
    {
        id: 30,
        name: 'Ночные Стрижи',
        win: true,
        date: '25.09.2018',
        rate: '28/20'
    },
    {
        id: 31,
        name: 'МамА АнархиЯ',
        win: true,
        date: '29.09.2018',
        rate: '30/24'
    },
    {
        id: 32,
        name: 'Крылатые Ангелы',
        win: true,
        date: '02.10.2018',
        rate: '30/2'
    },
    {
        id: 33,
        name: 'РoССиЯ ВeЛuКaЯ',
        win: true,
        date: '09.10.2018',
        rate: '30/11'
    },
    {
        id: 34,
        name: 'Крутые Воины',
        win: true,
        date: '16.10.2018',
        rate: '27/2'
    },
    {
        id: 35,
        name: 'Тайная стража',
        win: true,
        date: '27.11.2018',
        rate: '21/0'
    },
    {
        id: 36,
        name: 'NIGHT WOLVES',
        win: true,
        date: '11.12.2018',
        rate: '27/9'
    }
];

var maps = {
    '1': [
        {
            'ceil': 'c1',
            'img': 'cities/1/c1.jpg',
            'level': 79,
            'castle': 16,
            'name': 'Колёный'
        },
        {
            'ceil': 'd1',
            'img': 'cities/1/d1.jpg',
            'level': 79,
            'castle': 16,
            'name': 'Dizel'
        },
        {
            'ceil': 'e1',
            'img': 'cities/1/e1.jpg',
            'level': 68,
            'castle': 13,
            'name': 'туктук'
        },
        {
            'ceil': 'd2',
            'img': 'cities/1/d2.jpg',
            'level': 81,
            'castle': 18,
            'name': 'ОРЁЛ'
        },
        {
            'ceil': 'e2',
            'img': 'cities/1/e2.jpg',
            'level': 75,
            'castle': 15,
            'name': 'С@нек'
        },
        {
            'ceil': 'd3',
            'img': 'cities/1/d3.jpg',
            'level': 80,
            'castle': 18,
            'name': 'БеЛыЙ'
        },
        {
            'ceil': 'e3',
            'img': 'cities/1/e3.jpg',
            'level': 75,
            'castle': 15,
            'name': 'Курган'
        },
        {
            'ceil': 'c4',
            'img': 'cities/1/c4.jpg',
            'level': 78,
            'castle': 16,
            'name': 'Cool'
        },
        {
            'ceil': 'd4',
            'img': 'cities/1/d4.jpg',
            'level': 80,
            'castle': 16,
            'name': 'Злыдень'
        },
        {
            'ceil': 'e4',
            'img': 'cities/1/e4.jpg',
            'level': 60,
            'castle': 13,
            'name': 'Виктория'
        }
    ],
    2: [
        {
            'ceil': 'b1',
            'level': 69,
            'castle': 14,
            'name': 'СССР БРОДЯГА'
        },
        {
            'ceil': 'c1',
            'level': 72,
            'castle': 14,
            'name': 'vedjmak'
        },
        {
            'ceil': 'c2',
            'level': 74,
            'castle': 14,
            'name': '☼Елена® ☼'
        },
        {
            'ceil': 'd2',
            'level': 76,
            'castle': 15,
            'name': '<Анархист>'
        },
        {
            'ceil': 'd3',
            'level': 72,
            'castle': 14,
            'name': 'РАЗРУШИТЕЛЬ',
            pvpScore:            1449
        },
        {
            'ceil': 'e3',
            'level': 73,
            'castle': 14,
            'name': 'ДОБРЫЙ КАБАН'
        },
        {
            'ceil': 'e4',
            'level': 74,
            'castle': 14,
            'name': '♥MELISSA♥'
        },
        {
            'ceil': 'd1',
            'level': 65,
            'castle': 13,
            'name': 'Lilawadi DM'
        },
        {
            'ceil': 'e1',
            'level': 65,
            'castle': 13,
            'name': 'СчастьЕ'
        }
    ],
    3: [
        {
            'ceil': 'b4',
            'img': 'cities/3/beri_dopi.jpg',
            'level': 87,
            'castle': 17,
            'name': 'БериДопи BΞR'
        },
        {
            'ceil': 'e1',
            'img': 'cities/3/shadow.jpg',
            'level': 83,
            'castle': 18,
            'name': 'Shadow BΞR'
        },
        {
            'ceil': 'c4',
            'level': 82,
            'castle': 17,
            'name': 'АлександрBΞR'
        },
        {
            'ceil': 'd3',
            'level': 82,
            'castle': 16,
            'name': 'Morgan BΞR'
        },
        {
            'ceil': 'e2',
            'level': 83,
            'castle': 18,
            'name': 'ЕвгенийBΞR'
        }
    ],
    4: [
        {
            'ceil': 'e1',
            'img': 'cities/4/8.jpg',
            'level': 72,
            'castle': 15,
            'name': ' MEGOPOLIS'
        },
        {
            'ceil': 'e2',
            'img': 'cities/4/6.jpg',
            'level': 76,
            'castle': 16,
            'name': 'Назар'
        },
        {
            'ceil': 'e3',
            'img': 'cities/4/5.jpg',
            'level': 71,
            'castle': 15,
            'name': 'Вадим'
        },
        {
            'ceil': 'e4',
            'img': 'cities/4/1.jpg',
            'level': 65,
            'castle': 13,
            'name': 'Петр'
        },
        {
            'ceil': 'd2',
            'img': 'cities/4/7.jpg',
            'level': 65,
            'castle': 14,
            'name': 'Михаил'
        },
        {
            'ceil': 'd3',
            'level': 82,
            'castle': 18,
            'name': 'Вадим'
        },
        {
            'ceil': 'd4',
            'level': 70,
            'castle': 14,
            'name': 'Serеga '
        },
        {
            'ceil': 'c3',
            'img': 'cities/4/3.jpg',
            'level': 72,
            'castle': 16,
            'name': 'Мурат'
        },
        {
            'ceil': 'c4',
            'img': 'cities/4/2.jpg',
            'level': 74,
            'castle': 16,
            'name': 'Виктория'
        },
        {
            'ceil': 'b4',
            'img': 'cities/4/4.jpg',
            'level': 72,
            'castle': 15,
            'name': 'Георгий'
        }
    ],
    5: [
        {
            'ceil': 'b1',
            'img': 'cities/5/b1.jpg',
            'level': 76,
            'castle': 16,
            'name': 'y@streb'
        },
        {
            'ceil': 'c1',
            'img': 'cities/5/c1.jpg',
            'level': 78,
            'castle': 15,
            'name': '☼163RU☼™NW™'
        },
        {
            'ceil': 'd1',
            'img': 'cities/5/d1.jpg',
            'level': 63,
            'castle': 12,
            'name': '♣EdgarEs*NW*'
        },
        {
            'ceil': 'e1',
            'img': 'cities/5/e1.jpg',
            'level': 73,
            'castle': 14,
            'name': 'Леся   NW'
        },
        {
            'ceil': 'c2',
            'img': 'cities/5/c2.jpg',
            'level': 73,
            'castle': 15,
            'name': '♣LEKSAN™NW™'
        },
        {
            'ceil': 'd2',
            'img': 'cities/5/d2.jpg',
            'level': 77,
            'castle': 16,
            'name': 'Подавись™NW™'
        },
        {
            'ceil': 'e2',
            'img': 'cities/5/e2.jpg',
            'level': 78,
            'castle': 15,
            'name': 'Архитектор'
        },
        {
            'ceil': 'd3',
            'img': 'cities/5/d3.jpg',
            'level': 73,
            'castle': 14,
            'name': '♣Лютый™NW™'
        },
        {
            'ceil': 'e3',
            'img': 'cities/5/e3.jpg',
            'level': 77,
            'castle': 15,
            'name': 'ZHNETS™ NW™'
        },
        {
            'ceil': 'e4',
            'img': 'cities/5/e4.jpg',
            'level': 73,
            'castle': 14,
            'name': 'Алексей™NW™'
        }
    ],
    6: [
        {
            'ceil': 'b1',
            'img': 'cities/6/b1.jpg',
            'level': 84,
            'castle': 18,
            'name': 'Lexus'
        },

        {
            'ceil': 'c1',
            'level': 83,
            'castle': 17,
            'name': 'Fly'
        },

        {
            'ceil': 'c2',
            'img': 'cities/6/c2.jpg',
            'level': 84,
            'castle': 18,
            'name': 'HighLand'
        },

        {
            'ceil': 'd2',
            'level': 84,
            'castle': 19,
            'name': '*УКРОП*'
        },

        {
            'ceil': 'd3',
            'img': 'cities/6/d3.jpg',
            'level': 82,
            'castle': 18,
            'name': 'MEGADETH'
        },

        {
            'ceil': 'e3',
            'level': 86,
            'castle': 18,
            'name': 'Прокурор'
        },

        {
            'ceil': 'e4',
            'img': 'cities/6/e4.jpg',
            'level': 82,
            'castle': 18,
            'name': '♦BMW♦'
        },

        {
            'ceil': 'd1',
            'level': 83,
            'castle': 18,
            'name': '♦ПСИХИ♦'
        },

        {
            'ceil': 'e1',
            'level': 84,
            'castle': 19,
            'name': 'Игорь'
        },

        {
            'ceil': 'e2',
            'question': true
        }
    ],
    7: [
        {
            'ceil': 'b1',
            'img': 'cities/7/b1.jpg',
            'level': 75,
            'castle': 15,
            'name': '.',
            'id': 187873727
        },
        {
            'ceil': 'c1',
            'img': 'cities/7/c1.jpg',
            'level': 81,
            'castle': 16,
            'name': 'У--81'
        },
        {
            'ceil': 'd1',
            'img': 'cities/7/d1.jpg',
            'level': 63,
            'castle': 12,
            'name': 'Пророк'
        },
        {
            'ceil': 'e1',
            'img': 'cities/7/e1.jpg',
            'level': 43,
            'castle': 8,
            'name': 'настя'
        },
        {
            'ceil': 'c2',
            'img': 'cities/7/c2.jpg',
            'level': 77,
            'castle': 15,
            'name': 'Сергей'
        },
        {
            'ceil': 'd2',
            'img': 'cities/7/d2.jpg',
            'level': 81,
            'castle': 16,
            'name': '&V@lLeTt@&'
        },
        {
            'ceil': 'e2',
            'img': 'cities/7/e2.jpg',
            'level': 76,
            'castle': 16,
            'name': 'Алексей'
        },
        {
            'ceil': 'd3',
            'img': 'cities/7/d3.jpg',
            'level': 76,
            'castle': 15,
            'name': '&Вет@ль&'
        },
        {
            'ceil': 'e3',
            'img': 'cities/7/e3.jpg',
            'level': 72,
            'castle': 14,
            'name': 'Илья Пророк '
        },
        {
            'ceil': 'e4',
            'img': 'cities/7/e4.jpg',
            'level': 75,
            'castle': 14,
            'name': '&Поп@дос&'
        }
    ],
    8: [
        {
            'id': 306825640,
            'ceil': 'c1',
            'img': 'cities/8/c1.jpg',
            'level': 72,
            'castle': 15,
            'name': 'Буря'
        },
        {
            'id': '108899920',
            'ceil': 'b2',
            'img': 'cities/8/b2.jpg',
            'level': 78,
            'castle': 17,
            'name': 'ПЕРЛЕНГ'
        },
        {
            'id': '85181597',
            'ceil': 'a3',
            'img': 'cities/8/a3.jpg',
            'level': 78,
            'castle': 16,
            'name': 'Команданте'
        },
        {
            'id': 448287556,
            'ceil': 'b3',
            'img': 'cities/8/b3.jpg',
            'level': 47,
            'castle': 8,
            'name': 'Алпан'
        },
        {
            'id': 249736475,
            'ceil': 'b4',
            'img': 'cities/8/b4.jpg',
            'level': 75,
            'castle': 15,
            'name': 'ANUBIS'
        },
        {
            'id': '355908354',
            'ceil': 'c3',
            'img': 'cities/8/c3.jpg',
            'level': 76,
            'castle': 15,
            'name': 'БАРИН'
        },
        {
            'id': 5700428,
            'ceil': 'd2',
            'img': 'cities/8/d2.jpg',
            'level': 72,
            'castle': 14,
            'name': 'Злой '
        },
        {
            'id': 118976628,
            'ceil': 'd3',
            'img': 'cities/8/d3.jpg',
            'level': 60,
            'castle': 13,
            'name': 'Александр'
        },
        {
            'id': 237121198,
            'ceil': 'd4',
            'img': 'cities/8/d4.jpg',
            'level': 68,
            'castle': 14,
            'name': 'Олег'
        },
        {
            'id': 134405612,
            'ceil': 'e3',
            'img': 'cities/8/e3.jpg',
            'level': 71,
            'castle': 16,
            'name': 'Елисей'
        }
    ],
    9: [
        {
            'id': 166942279,
            'ceil': 'c1',
            'img': 'cities/9/c1.jpg',
            'level': 77,
            'castle': 15,
            'name': 'Наталья'
        },
        {
            'id': 64052937,
            'ceil': 'd1',
            'img': 'cities/9/d1.jpg',
            'level': 82,
            'castle': 16,
            'name': 'Злыдень ™SD™'
        },
        {
            'id': 289669561,
            'ceil': 'e4',
            'img': 'cities/9/e4.jpg',
            'level': 60,
            'castle': 13,
            'name': 'ЗлоСцуко™SD™'
        },
        {
            'id': 241183281,
            'ceil': 'e1',
            'img': 'cities/9/e1.jpg',
            'level': 77,
            'castle': 15,
            'name': 'Курган™SD™'
        },
        {
            'id': 114446531,
            'ceil': 'd2',
            'img': 'cities/9/d2.jpg',
            'level': 80,
            'castle': 18,
            'name': 'БеЛыЙ-71'
        },
        {
            'id': 10183828,
            'ceil': 'e2',
            'img': 'cities/9/e2.jpg',
            'level': 67,
            'castle': 13,
            'name': 'Roni™SD™'
        },
        {
            'id': 234778336,
            'ceil': 'e3',
            'img': 'cities/9/e3.jpg',
            'level': 76,
            'castle': 15,
            'name': 'C@HEk™SD™'
        },
        {
            'id': 52667828,
            'ceil': 'd3',
            'img': 'cities/9/d3.jpg',
            'level': 80,
            'castle': 16,
            'name': 'Колёный™SD™'
        },
        {
            'id': 39779900,
            'ceil': 'c4',
            'img': 'cities/9/c4.jpg',
            'level': 80,
            'castle': 16,
            'name': 'COOL™SD™'
        },
        {
            'id': 141297863,
            'ceil': 'd4',
            'img': 'cities/9/d4.jpg',
            'level': 80,
            'castle': 16,
            'name': 'Dizel™SD™'
        }
    ],
    10: [
        {
            'id': 187130394,
            'ceil': 'b4',
            'img': 'cities/10/b4.jpg',
            'level': 66,
            'castle': 12,
            'name': '♠Владимир77♠'
        },
        {
            'id': 183788901,
            'ceil': 'c4',
            'img': 'cities/10/c4.jpg',
            'level': 89,
            'castle': 19,
            'name': '♠Zaporozhye♠'
        },
        {
            'id': 326914408,
            'ceil': 'c3',
            'img': 'cities/10/c3.jpg',
            'level': 65,
            'castle': 12,
            'name': '♠SoNY♠'
        },
        {
            'id': 289498783,
            'ceil': 'c2',
            'img': 'cities/10/c2.jpg',
            'level': 64,
            'castle': 12,
            'name': '♠Рокот♠'
        },
        {
            'id': 398068888,
            'ceil': 'd4',
            'img': 'cities/10/d4.jpg',
            'level': 66,
            'castle': 12,
            'name': '♠_АнгелЗла_♠'
        },
        {
            'id': 307642157,
            'ceil': 'd1',
            'img': 'cities/10/d1.jpg',
            'level': 64,
            'castle': 12,
            'name': '♠Бабай♠'
        },
        {
            'id': 226239337,
            'ceil': 'e4',
            'img': 'cities/10/e4.jpg',
            'level': 51,
            'castle': 9,
            'name': '♠Цыпачка))♠'
        },
        {
            'id': 430772383,
            'ceil': 'e3',
            'img': 'cities/10/e3.jpg',
            'level': 63,
            'castle': 12,
            'name': '♠StalinGraD♠'
        },
        {
            'id': 177065656,
            'ceil': 'e2',
            'level': 86,
            'castle': 18,
            'name': '♠Rodina♠'
        },
        {
            'id': 174125343,
            'ceil': 'd3',
            'level': 92,
            'castle': 19,
            'name': '♠ Робин Гуд♠'
        },
        {
            'ceil': 'e1',
            'trap': true
        },
        {
            'ceil': 'd2',
            'trap': true
        }
    ],
    11: [
        {
            'id': 377261884,
            'ceil': 'b1',
            'level': 64,
            'castle': 12,
            'img': 'cities/11/b1.jpg',
            'name': 'Алиса™SD™'
        },
        {
            'id': 244814783,
            'ceil': 'c1',
            'level': 79,
            'castle': 16,
            'img': 'cities/11/c1.jpg',
            'name': 'КотХикка™SD'
        },
        {
            'id': 169382317,
            'ceil': 'd1',
            'level': 62,
            'castle': 12,
            'img': 'cities/11/d1.jpg',
            'name': 'Наталья'
        },
        {
            'id': 253042951,
            'ceil': 'e1',
            'level': 69,
            'castle': 14,
            'owner': true,
            'img': 'cities/11/e1.jpg',
            'name': 'Дизель™SD™'
        },
        {
            'id': 69782403,
            'ceil': 'c2',
            'level': 74,
            'castle': 14,
            'img': 'cities/11/c2.jpg',
            'name': 'Решала™SD2™'
        },
        {
            'id': 161001307,
            'ceil': 'd2',
            'level': 83,
            'castle': 17,
            'name': ' Архангел'
        },
        {
            'id': 69542414,
            'ceil': 'e2',
            'level': 66,
            'castle': 13,
            'img': 'cities/11/e2.jpg',
            'name': 'Pepper™SD™'
        },
        {
            'id': 239065290,
            'ceil': 'd3',
            'level': 73,
            'castle': 15,
            'img': 'cities/11/d3.jpg',
            'name': 'Вован↔™SD'
        },
        {
            'id': 47120369,
            'ceil': 'e3',
            'level': 83,
            'castle': 17,
            'img': 'cities/11/e3.jpg',
            'name': 'Адвокат™SD™'
        },
        {
            'id': 84814955,
            'ceil': 'e4',
            'level': 69,
            'castle': 13,
            'img': 'cities/11/e4.jpg',
            'name': 'ИванSD'
        }
    ],
    12: [
        {
            'id': 132842340,
            'ceil': 'e4',
            'level': 76,
            'castle': 15,
            'img': 'cities/12/e4.jpg',
            'name': '&Поп@дос&',
            'owner': true,
        },
        {
            'id': 187873727,
            'ceil': 'b1',
            'level': 76,
            'castle': 15,
            'img': 'cities/12/b1.jpg',
            'name': 'Игорь'
        },
        {
            'id': 161076994,
            'ceil': 'c1',
            'level': 82,
            'castle': 16,
            'img': 'cities/12/c1.jpg',
            'name': '&V@lLeTt@&'
        },
        {
            'id': 166281741,
            'ceil': 'd1',
            'level': 65,
            'castle': 13,
            'img': 'cities/12/d1.jpg',
            'name': 'Odessa'
        },
        {
            'id': 210318566,
            'ceil': 'e1',
            'level': 43,
            'castle': 8,
            'img': 'cities/12/e1.jpg',
            'name': '9 звёзд'
        },
        {
            'id': 27437383,
            'ceil': 'c2',
            'level': 77,
            'castle': 15,
            'img': 'cities/12/c2.jpg',
            'name': '&Вет@ль&'
        },
        {
            'id': 155613390,
            'ceil': 'd2',
            'level': 83,
            'castle': 17,
            'img': 'cities/12/d2.jpg',
            'name': 'У--83'
        },
        {
            'id': 312176192,
            'ceil': 'e2',
            'level': 73,
            'castle': 14,
            'img': 'cities/12/e2.jpg',
            'name': 'Илья Пророк '
        },
        {
            'id': 83120306,
            'ceil': 'e3',
            'level': 81,
            'castle': 16,
            'img': 'cities/12/e3.jpg',
            'name': 'Алексей'
        },
        {
            'id': 51488502,
            'ceil': 'd3',
            'level': 77,
            'castle': 15,
            'img': 'cities/12/d3.jpg',
            'name': 'Сергей'
        }
    ],
    13: [
        {
            'id': 154353179,
            'ceil': 'b1',
            'level': 77,
            'castle': 16,
            'img': 'cities/13/b1.jpg',
            'name': 'простор'
        },
        {
            'id': 255277094,
            'ceil': 'c2',
            'level': 73,
            'castle': 14,
            'img': 'cities/13/c2.jpg',
            'name': '100% ОТОМЩУ!'
        },
        {
            'id': 113204305,
            'ceil': 'd3',
            'level': 77,
            'castle': 16,
            'img': 'cities/13/d3.jpg',
            'name': '&WA&Фарида'
        },
        {
            'id': 7172162,
            'ceil': 'e4',
            'level': 77,
            'castle': 15,
            'img': 'cities/13/e4.jpg',
            'name': '&WA& SVETIK'
        },
        {
            'id': 204703853,
            'ceil': 'c1',
            'level': 85,
            'castle': 17,
            'name': '&WA&СамареЦ'
        },
        {
            'id': 29494666,
            'ceil': 'd2',
            'level': 88,
            'castle': 18,
            'name': 'Холоффэйм'
        },
        {
            'id': 355523,
            'ceil': 'e3',
            'level': 77,
            'castle': 17,
            'name': 'ZeS'
        },
        {
            'ceil': 'd1',
            'question': true
        },
        {
            'id': 12941187,
            'ceil': 'e1',
            'level': 62,
            'castle': 12,
            'name': '&WA&Дмитрий'
        },
        {
            'id': 7172162,
            'ceil': 'e2',
            'level': 70,
            'castle': 14,
            'name': '&WA&Денис',
            'owner': true
        },
    ],

    14: [
        {
            'id': 275702061,
            'ceil': 'b1',
            'level': 74,
            'castle': 15,
            'img': 'cities/14/b1.jpg',
            'name': 'Pistalet КлМ'
        },
        {
            'id': 289685989,
            'ceil': 'c1',
            'level': 82,
            'castle': 16,
            'img': 'cities/14/c1.jpg',
            'name': 'голубиКлМ'
        },
        {
            'id': 213899092,
            'ceil': 'd1',
            'level': 72,
            'castle': 14,
            'img': 'cities/14/d1.jpg',
            'name': 'Димон КлМ'
        },
        {
            'id': 297555311,
            'ceil': 'e1',
            'level': 63,
            'castle': 12,
            'img': 'cities/14/e1.jpg',
            'name': 'Владимир КлМ'
        },
        {
            'id': 267685182,
            'ceil': 'c2',
            'level': 77,
            'castle': 15,
            'img': 'cities/14/c2.jpg',
            'name': 'МилеDи КлМ'
        },
        {
            'id': 177488981,
            'ceil': 'd2',
            'level': 80,
            'castle': 16,
            'img': 'cities/14/d2.jpg',
            'name': 'Алексей КлМ'
        },
        {
            'id': 221417423,
            'ceil': 'e2',
            'level': 73,
            'castle': 14,
            'img': 'cities/14/e2.jpg',
            'name': 'Вя4еслав КлМ'
        },
        {
            'id': 204333923,
            'ceil': 'd3',
            'level': 73,
            'castle': 15,
            'img': 'cities/14/d3.jpg',
            'name': 'Демон КлМ'
        },
        {
            'id': 139072782,
            'ceil': 'e3',
            'level': 81,
            'castle': 16,
            'img': 'cities/14/e3.jpg',
            'name': '&Добрый КлМ&'
        },
        {
            'id': 997412,
            'ceil': 'e4',
            'level': 74,
            'castle': 14,
            'img': 'cities/14/e4.jpg',
            'name': 'ДаоПесдынКлМ'
        }
        ],
    15: [
        {
            'id': 339174248,
            'ceil': 'e1',
            'level': 71,
            'castle': 13,
            'img': 'cities/15/e1.jpg',
            'name': 'John Wick'
        },
        {
            'id': 211628600,
            'ceil': 'e2',
            'level': 84,
            'castle': 17,
            'img': 'cities/15/e2.jpg',
            'name': 'Градхерсон'
        },
        {
            'id': 3462991,
            'ceil': 'e3',
            'level': 80,
            'castle': 16,
            'img': 'cities/15/e3.jpg',
            'name': 'Палыч'
        },
        {
            'id': 189542387,
            'ceil': 'e4',
            'level': 73,
            'castle': 14,
            'img': 'cities/15/e4.jpg',
            'name': '&Про100Царь&'
        },
        {
            'id': 166601573,
            'ceil': 'd1',
            'level': 88,
            'castle': 18,
            'img': 'cities/15/d1.jpg',
            'name': 'Серж VS',
            'owner': true
        },
        {
            'id': 21073210,
            'ceil': 'd2',
            'level': 80,
            'castle': 16,
            'img': 'cities/15/d2.jpg',
            'name': 'ДРЫЩ'
        },
        {
            'id': 49792503,
            'ceil': 'c1',
            'level': 79,
            'castle': 15,
            'img': 'cities/15/c1.jpg',
            'name': 'GASHAN'
        },
        {
            'id': 91322612,
            'ceil': 'c4',
            'level': 78,
            'castle': 15,
            'img': 'cities/15/c4.jpg',
            'name': '◄ФУЛЛ ХАУС►'
        },
        {
            'id': 201069013,
            'ceil': 'b2',
            'level': 75,
            'castle': 15,
            'img': 'cities/15/b2.jpg',
            'name': '©ВАРЯГЪ'
        },
        {
            'id': 231747710,
            'ceil': 'b3',
            'level': 75,
            'castle': 14,
            'img': 'cities/15/b3.jpg',
            'name': 'Виталий'
        },
        {
            'ceil': 'd4',
            'trap': true
        }
    ],
    16: [
        {
            'id': 327877417,
            'ceil': 'e1',
            'level': 64,
            'castle': 13,
            'img': 'cities/16/e1.jpg',
            'name': 'Руслан'
        },
        {
            'id': 4879535,
            'ceil': 'e2',
            'level': 55,
            'castle': 12,
            'img': 'cities/16/e2.jpg',
            'name': 'Виталий'
        },
        {
            'id': 135291296,
            'ceil': 'e3',
            'level': 77,
            'castle': 17,
            'img': 'cities/16/e3.jpg',
            'name': 'Южн.Централ'
        },
        {
            'id': 145457237,
            'ceil': 'e4',
            'level': 68,
            'castle': 15,
            'img': 'cities/16/e4.jpg',
            'name': 'Иван'
        },
        {
            'id': 225934600,
            'ceil': 'd1',
            'level': 74,
            'castle': 16,
            'img': 'cities/16/d1.jpg',
            'name': 'Джери Ли'
        },
        {
            'id': 17235330,
            'ceil': 'd2',
            'level': 78,
            'castle': 16,
            'img': 'cities/16/d2.jpg',
            'name': 'Алексей'
        },
        {
            'id': 101951230,
            'ceil': 'd3',
            'level': 68,
            'castle': 15,
            'img': 'cities/16/d3.jpg',
            'name': 'Дмитрий'
        },
        {
            'id': 57398688,
            'ceil': 'c1',
            'level': 75,
            'castle': 15,
            'img': 'cities/16/c1.jpg',
            'name': 'бультерьер'
        },
        {
            'id': 243013963,
            'ceil': 'c2',
            'level': 69,
            'castle': 14,
            'img': 'cities/16/c2.jpg',
            'name': 'Ник'
        },
        {
            'id': 301232803,
            'ceil': 'b1',
            'level': 71,
            'castle': 15,
            'img': 'cities/16/b1.jpg',
            'name': 'Николай'
        }
    ],
    17: [
        {
            'id': 141651120,
            'ceil': 'e1',
            'level': 68,
            'castle': 13,
            'img': 'cities/17/e1.jpg',
            'name': 'НАХУЙсПЛЯЖА®'
        },
        {
            'id': 267047175,
            'ceil': 'e2',
            'level': 79,
            'castle': 15,
            'img': 'cities/17/e2.jpg',
            'name': ' Січ '
        },
        {
            'id': 155166189,
            'ceil': 'e3',
            'level': 86,
            'castle': 17,
            'img': 'cities/17/e3.jpg',
            'name': '®☼Argentum®'
        },
        {
            'id': 90443879,
            'ceil': 'e4',
            'level': 69,
            'castle': 13,
            'img': 'cities/17/e4.jpg',
            'name': '®ВИННИ-ПУХ®'
        },
        {
            'id': 290736372,
            'ceil': 'd1',
            'level': 79,
            'castle': 15,
            'img': 'cities/17/d1.jpg',
            'name': '®МАКСИМУС®'
        },
        {
            'id': 155335311,
            'ceil': 'd2',
            'level': 85,
            'castle': 18,
            'img': 'cities/17/d2.jpg',
            'name': '®адВидеть®'
        },
        {
            'id': 288689939,
            'ceil': 'd3',
            'level': 75,
            'castle': 14,
            'img': 'cities/17/d3.jpg',
            'name': '®АЛЕКСЕЙ®'
        },
        {
            'id': 176890989,
            'ceil': 'c1',
            'level': 84,
            'castle': 17,
            'img': 'cities/17/c1.jpg',
            'name': '®SПАРTAНЕЦ®'
        },
        {
            'id': 255644558,
            'ceil': 'c2',
            'level': 74,
            'castle': 14,
            'img': 'cities/17/c2.jpg',
            'name': 'АКУНА®МАТАТА'
        },
        {
            'id': 354217748,
            'ceil': 'b1',
            'level': 69,
            'castle': 14,
            'img': 'cities/17/b1.jpg',
            'name': 'Белый Орёл☻'
        },
    ],
    18: [
        {
            'id': 181036663,
            'ceil': 'd2',
            'level': 85,
            'castle': 17,
            'img': 'cities/18/1.jpg',
            'name': 'SV_Вiк-TOR☼'
        },
        {
            'id': 72363202,
            'ceil': 'e2',
            'level': 77,
            'castle': 15,
            'img': 'cities/18/2.jpg',
            'name': 'SV Камелот☼'
        },
        {
            'id': 275771059,
            'ceil': 'e4',
            'level': 73,
            'castle': 14,
            'img': 'cities/18/3.jpg',
            'name': 'SV Лапа☼░'
        },
        {
            'id': 301500309,
            'ceil': 'c1',
            'level': 78,
            'castle': 15,
            'owner': true,
            'img': 'cities/18/4.jpg',
            'name': 'SV Марго☼░'
        },
        {
            'id': 236720524,
            'ceil': 'e1',
            'level': 63,
            'castle': 13,
            'img': 'cities/18/5.jpg',
            'name': 'SV Алёна☼'
        },
        {
            'id': 140107650,
            'ceil': 'e3',
            'level': 78,
            'castle': 15,
            'img': 'cities/18/6.jpg',
            'name': 'SV Алекс ☼'
        },
        {
            'id': 196414740,
            'ceil': 'd3',
            'level': 74,
            'castle': 14,
            'img': 'cities/18/7.jpg',
            'name': 'SV Сашок ☼░'
        },
        {
            'id': 65660240,
            'ceil': 'd1',
            'level': 78,
            'castle': 15,
            'img': 'cities/18/8.jpg',
            'name': 'SV Лола☼░'
        },
        {
            'id': 178358056,
            'ceil': 'b1',
            'level': 74,
            'castle': 14,
            'img': 'cities/18/9.jpg',
            'name': 'SV Марат☼░'
        },
        {
            'id': 253653239,
            'ceil': 'c2',
            'level': 78,
            'castle': 15,
            'img': 'cities/18/10.jpg',
            'name': 'SV Илья'
        }
    ],
    19: [
        {
            'id': 157445236,
            'ceil': 'e1',
            'level': 74,
            'castle': 14,
            'img': 'cities/19/e1.jpg',
            'name': '® Red ®'
        },
        {
            'id': 176656336,
            'ceil': 'e2',
            'level': 76,
            'castle': 16,
            'img': 'cities/19/e2.jpg',
            'name': '® Roma ®'
        },
        {
            'id': 166473897,
            'ceil': 'e3',
            'level': 81,
            'castle': 16,
            'img': 'cities/19/e3.jpg',
            'name': ' ® 907  ®'
        },
        {
            'id': 20627179,
            'ceil': 'e4',
            'level': 78,
            'castle': 15,
            'img': 'cities/19/e4.jpg',
            'name': ' ®MEFISTO ®'
        },
        {
            'id': 203933817,
            'ceil': 'd2',
            'level': 74,
            'castle': 14,
            'img': 'cities/19/d2.jpg',
            'name': '®добряк®'
        },
        {
            'id': 245879805,
            'ceil': 'd3',
            'level': 85,
            'castle': 18,
            'img': 'cities/19/d3.jpg',
            'name': '▓BMW  B∑R'
        },
        {
            'id': 101707495,
            'ceil': 'd4',
            'level': 70,
            'castle': 14,
            'img': 'cities/19/d4.jpg',
            'name': '®ВикТор®'
        },
        {
            'id': 63883322,
            'ceil': 'c3',
            'level': 73,
            'castle': 14,
            'img': 'cities/19/c3.jpg',
            'name': '®Ал@сити® '
        },
        {
            'id': 224424550,
            'ceil': 'c4',
            'level': 85,
            'castle': 17,
            'img': 'cities/19/c4.jpg',
            'name': ' ® Олег ®'
        },
        {
            'id': 205341414,
            'ceil': 'b4',
            'level': 71,
            'castle': 14,
            'img': 'cities/19/b4.jpg',
            'name': '® Hamster ®',
            'owner': true
        },
    ],
    20: [
        {
            'id': 234025747,
            'ceil': 'e1',
            'level': 72,
            'castle': 14,
            'img': 'cities/20/e1.jpg',
            'name': '@ NiK0 @'
        },
        {
            'id': 17769544,
            'ceil': 'e2',
            'level': 84,
            'castle': 17,
            'img': 'cities/20/e2.jpg',
            'name': 'Teōtīhuacān@'
        },
        {
            'id': 134057508,
            'ceil': 'e3',
            'level': 78,
            'castle': 16,
            'img': 'cities/20/e3.jpg',
            'name': '@СЕРГОФАН@'
        },
        {
            'id': 362998212,
            'ceil': 'e4',
            'level': 58,
            'castle': 10,
            'img': 'cities/20/e4.jpg',
            'name': '@DEXTER@'
        },
        {
            'id': 35003499,
            'ceil': 'd2',
            'level': 75,
            'castle': 15,
            'img': 'cities/20/d2.jpg',
            'name': '"Lim koks"'
        },
        {
            'id': 33170374,
            'ceil': 'd3',
            'level': 90,
            'castle': 19,
            'img': 'cities/20/d3.jpg',
            'name': '♦♫Маугли'
        },
        {
            'id': 30067566,
            'ceil': 'd4',
            'level': 81,
            'castle': 16,
            'img': 'cities/20/d4.jpg',
            'name': '@EVGENIY@',
            'owner': true
        },
        {
            'id': 83234807,
            'ceil': 'c3',
            'level': 79,
            'castle': 15,
            'img': 'cities/20/c3.jpg',
            'name': '@ SaeL @'
        },
        {
            'id': 47410453,
            'ceil': 'c4',
            'level': 83,
            'castle': 18,
            'img': 'cities/20/c4.jpg',
            'name': '♪Гит@рист♫'
        },
        {
            'id': 352872301,
            'ceil': 'b4',
            'level': 70,
            'castle': 13,
            'img': 'cities/20/b4.jpg',
            'name': 'в@дюс'
        }
    ],
    21: [
	{
            'id': 320022760,
            'ceil': 'e1',
            'level': 61,
            'castle': 12,
            'img': 'cities/21/e1.jpg',
            'name': 'Иванов '
        },
	{
            'id': 10159637,
            'ceil': 'e2',
            'level': 70,
            'castle': 14,
            'img': 'cities/21/e2.jpg',
            'name': '&WA&Денис',
	    'owner': true
        },
	{
            'id': 193771482,
            'ceil': 'e3',
            'level': 76,
            'castle': 16,
            'img': 'cities/21/e3.jpg',
            'name': 'Ольга'
        },
	{
            'id': 154353179,
            'ceil': 'e4',
            'level': 78,
            'castle': 16,
            'img': 'cities/21/e4.jpg',
            'name': 'простор'
        },
	{
            'id': 324912181,
            'ceil': 'd1',
            'level': 65,
            'castle': 12,
            'img': 'cities/21/d1.jpg',
            'name': 'Замок Чудес'
        },
	{
            'id': 253248750,
            'ceil': 'd2',
            'level': 81,
            'castle': 16,
            'img': 'cities/21/d2.jpg',
            'name': 'Виталий'
        },
	{
            'id': 33621564,
            'ceil': 'd3',
            'level': 76,
            'castle': 15,
            'img': 'cities/21/d3.jpg',
            'name': 'WГура-ЗанкаA'
        },
	{
            'id': 7172162,
            'ceil': 'c1',
            'level': 77,
            'castle': 15,
            'img': 'cities/21/c1.jpg',
            'name': '&WA& SVETIK'
        },
	{
            'id': 113204305,
            'ceil': 'c2',
            'level': 77,
            'castle': 15,
            'img': 'cities/21/c2.jpg',
            'name': '&WA&Фарида'
        },
	{
            'id': 255277094,
            'ceil': 'b1',
            'level': 73,
            'castle': 14,
            'img': 'cities/21/b1.jpg',
            'name': '100% ОТОМЩУ!'
        }
    ],
    22: [
	{
            'id': 119645204,
            'ceil': 'e1',
            'level': 74,
            'castle': 15,
            'name': 'Синичка (ВЧ)'
        },
	{
            'id': 10490504,
            'ceil': 'e2',
            'level': 88,
            'castle': 18,
            'img': 'cities/22/e2.jpg',
            'name': 'ВадиМ (ВЧ)'
        },
	{
            'id': 8473668,
            'ceil': 'e3',
            'level': 79,
            'castle': 16,
            'img': 'cities/22/e3.jpg',
            'name': 'Геныч (ВЧ)'
        },
	{
            'id': 179821335,
            'ceil': 'e4',
            'level': 79,
            'castle': 15,
            'img': 'cities/22/e4.jpg',
            'name': 'Магратея(ВЧ)'
        },
	{
            'id': 54720389,
            'ceil': 'd1',
            'level': 90,
            'castle': 19,
            'img': 'cities/22/d1.jpg',
            'name': 'Влад(ВЧ)',
	    'owner': true
        },
	{
            'id': 179096613,
            'ceil': 'd2',
            'level': 88,
            'castle': 18,
            'img': 'cities/22/d2.jpg',
            'name': 'Евгений (ВЧ)'
        },
	{
            'id': 15576204,
            'ceil': 'd3',
            'level': 78,
            'castle': 15,
            'name': '@ДаЧнИк@(ВЧ)'
        },
	{
            'id': 19154603,
            'ceil': 'c1',
            'level': 80,
            'castle': 16,
            'img': 'cities/22/c1.jpg',
            'name': 'Morrigan(ВЧ)'
        },
	{
            'id': 18064730,
            'ceil': 'c2',
            'level': 74,
            'castle': 15,
            'name': 'Горец (ВЧ)'
        },
	{
            'id': 399409283,
            'ceil': 'b1',
            'level': 77,
            'castle': 15,
            'name': 'Юрий (ВЧ)'
        }
	],
    23: [
        {
            'id': 311248745,
            'ceil': 'e1',
            'level': 71,
            'castle': 13,
            'img': 'cities/23/e1.jpg',
            'name': '◄Avgust►'
        },
        {
            'id': 189542387,
            'ceil': 'e2',
            'level': 73,
            'castle': 14,
            'img': 'cities/23/e2.jpg',
            'name': '&Про100Царь&'
        },
        {
            'id': 3462991,
            'ceil': 'e3',
            'level': 81,
            'castle': 16,
            'img': 'cities/23/e3.jpg',
            'name': 'ПАЛЫЧ'
        },
        {
            'id': 231747710,
            'ceil': 'e4',
            'level': 75,
            'castle': 14,
            'img': 'cities/23/e4.jpg',
            'name': 'Виталий'
        },
        {
            'id': 339174248,
            'ceil': 'd1',
            'level': 73,
            'castle': 14,
            'img': 'cities/23/d1.jpg',
            'name': 'John Wick'
        },
        {
            'id': 166601573,
            'ceil': 'd2',
            'level': 88,
            'castle': 18,
            'img': 'cities/23/d2.jpg',
            'name': 'ПОХУЙ'
        },
        {
            'id': 201069013,
            'ceil': 'd3',
            'level': 77,
            'castle': 15,
            'img': 'cities/23/d3.jpg',
            'name': '©ВАРЯГЪ'
        },
        {
            'id': 21073210,
            'ceil': 'c1',
            'level': 81,
            'castle': 16,
            'img': 'cities/23/c1.jpg',
            'name': 'ДРЫЩ'
        },
        {
            'id': 49792503,
            'ceil': 'c2',
            'level': 79,
            'castle': 15,
            'img': 'cities/23/c2.jpg',
            'name': 'GASHAN'
        },
        {
            'id': 91322612,
            'ceil': 'b1',
            'level': 79,
            'castle': 16,
            'img': 'cities/23/b1.jpg',
            'name': '◄ФУЛЛ ХАУС►'
        }
    ],
    24 : [
        {
            'id': 342147266,
            'ceil': 'e1',
            'level': 47,
            'castle': 10,
            'img': 'cities/24/e1.jpg',
            'name': 'Андрей'
        },
        {
            'id': 67875783,
            'ceil': 'e2',
            'level': 82,
            'castle': 18,
            'img': 'cities/24/e2.jpg',
            'name': 'MPower '
        },
        {
            'id': 1460047,
            'ceil': 'e3',
            'level': 79,
            'castle': 16,
            'img': 'cities/24/e3.jpg',
            'name': 'Злопамятный'
        },
        {
            'id': 223864871,
            'ceil': 'e4',
            'level': 74,
            'castle': 15,
            'img': 'cities/24/e4.jpg',
            'name': 'КОЗЫРЬ'
        },
        {
            'id': 319848317,
            'ceil': 'd1',
            'level': 86,
            'castle': 17,
            'img': 'cities/24/d1.jpg',
            'name': '▓ Олег_bot_▓',
            'owner': true
        },
        {
            'id': 261124473,
            'ceil': 'd2',
            'level': 80,
            'castle': 16,
            'img': 'cities/24/d2.jpg',
            'name': ' Жанна SV'
        },
        {
            'id': 3169833,
            'ceil': 'd3',
            'level': 74,
            'castle': 15,
            'img': 'cities/24/d3.jpg',
            'name': 'GriBniI{♂♥♀'
        },
        {
            'id': 322834046,
            'ceil': 'c1',
            'level': 78,
            'castle': 15,
            'img': 'cities/24/c1.jpg',
            'name': '▓ Deadpool ▓'
        },
        {
            'id': 286444916,
            'ceil': 'c2',
            'level': 77,
            'castle': 15,
            'img': 'cities/24/c2.jpg',
            'name': 'сер888'
        },
        {
            'id': 98195825,
            'ceil': 'b1',
            'level': 73,
            'castle': 15,
            'img': 'cities/24/b1.jpg',
            'name': 'Александр'
        }
    ],
    25: [
        {
            'id': 64602113,
            'ceil': 'e1',
            'level': 79,
            'castle': 16,
            'img': 'cities/25/e1.jpg',
            'name': 'tom ∑'
        },
        {
            'id': 41767282,
            'ceil': 'e2',
            'level': 74,
            'castle': 14,
            'img': 'cities/25/e2.jpg',
            'name': 'Тарас ∑ '
        },
        {
            'id': 268106742,
            'ceil': 'e3',
            'level': 56,
            'castle': 10,
            'img': 'cities/25/e3.jpg',
            'name': 'Жека∑ '
        },
        {
            'id': 244330772,
            'ceil': 'e4',
            'level': 48,
            'castle': 9,
            'img': 'cities/25/e4.jpg',
            'name': 'КириллБелый∑'
        },
        {
            'id': 151172144,
            'ceil': 'd2',
            'level': 81,
            'castle': 16,
            'img': 'cities/25/d2.jpg',
            'name': 'ALEXFIL∑'
        },
        {
            'id': 216468707,
            'ceil': 'd3',
            'level': 68,
            'castle': 13,
            'img': 'cities/25/d3.jpg',
            'name': 'Ларик ∑ '
        },
        {
            'id': 330045081,
            'ceil': 'd4',
            'level': 57,
            'castle': 10,
            'img': 'cities/25/d4.jpg',
            'name': 'Разобран ∑',
            'owner': true
        },
        {
            'id': 221446519,
            'ceil': 'c3',
            'level': 81,
            'castle': 16,
            'img': 'cities/25/c3.jpg',
            'name': 'Вадим ∑'
        },
        {
            'id': 279389593,
            'ceil': 'c4',
            'level': 60,
            'castle': 12,
            'img': 'cities/25/c4.jpg',
            'name': 'GAINER ∑'
        },
        {
            'id': 69344721,
            'ceil': 'b4',
            'level': 83,
            'castle': 18,
            'img': 'cities/25/b4.jpg',
            'name': ' VEIRON ∑'
        },
        {
            'ceil': 'd1',
            'trap': true
        }
    ],
    26: [
        {
            'id': 351320361,
            'ceil': 'e1',
            'level': 33,
            'castle': 8,
            'img': 'cities/26/e1.jpg',
            'name': 'БогиняСвета□'
        },
        {
            'id': 131191896,
            'ceil': 'e2',
            'level': 82,
            'castle': 16,
            'img': 'cities/26/e2.jpg',
            'name': '□сити□'
        },
        {
            'id': 29069109,
            'ceil': 'e3',
            'level': 81,
            'castle': 16,
            'img': 'cities/26/e3.jpg',
            'name': '□Алексей □'
        },
        {
            'id': 41422943,
            'ceil': 'e4',
            'level': 82,
            'castle': 16,
            'img': 'cities/26/e4.jpg',
            'name': '□ Г Р У Т □'
        },
        {
            'id': 225129698,
            'ceil': 'd1',
            'level': 71,
            'castle': 14,
            'img': 'cities/26/d1.jpg',
            'name': '□ХАМ□'
        },
        {
            'id': 213793788,
            'ceil': 'd2',
            'level': 81,
            'castle': 17,
            'img': 'cities/26/d2.jpg',
            'name': '.......'
        },
        {
            'id': 304762914,
            'ceil': 'd3',
            'level': 59,
            'castle': 11,
            'img': 'cities/26/d3.jpg',
            'name': '□Ангелина□'
        },
        {
            'id': 54614447,
            'ceil': 'c1',
            'level': 84,
            'castle': 17,
            'img': 'cities/26/c1.jpg',
	    'owner': true,
            'name': '□ABADDON□'
        },
        {
            'id': 308536494,
            'ceil': 'c2',
            'level': 60,
            'castle': 12,
            'img': 'cities/26/c2.jpg',
            'name': '□ЭРЛ□'
        },
        {
            'id': 51115388,
            'ceil': 'b1',
            'level': 84,
            'castle': 18,
            'img': 'cities/26/b1.jpg',
            'name': '□ Назар □'
        }
    ],
    27:
    [
        {
            'id': 319409929,
            'ceil': 'e1',
            'level': 70,
            'castle': 13,
            'img': 'cities/27/e1.jpg',
            'name': '♫Артур♫'
        },
        {
            'id': 304144340,
            'ceil': 'e2',
            'level': 27,
            'castle': 8,
            'img': 'cities/27/e2.jpg',
            'name': '◄ Маг ►'
        },
        {
            'id': 164156599,
            'ceil': 'e3',
            'level': 90,
            'castle': 19,
            'img': 'cities/27/e3.jpg',
            'name': '♫леха♫',
            'owner': true
        },
        {
            'id': 329924209,
            'ceil': 'e4',
            'level': 79,
            'castle': 15,
            'img': 'cities/27/e4.jpg',
            'name': '♫Ж У Л И К ♫'
        },
        {
            'id': 106162317,
            'ceil': 'd1',
            'level': 28,
            'castle': 8,
            'img': 'cities/27/d1.jpg',
            'name': '◄ Андрей ►'
        },
        {
            'id': 138255387,
            'ceil': 'd2',
            'level': 70,
            'castle': 13,
            'img': 'cities/27/d2.jpg',
            'name': '♫Пандора♫'
        },
        {
            'id': 105671536,
            'ceil': 'd3',
            'level': 77,
            'castle': 16,
            'img': 'cities/27/d3.jpg',
            'name': '♫КУЛАК  ДНР♫'
        },
        {
            'id': 166622567,
            'ceil': 'c1',
            'level': 85,
            'castle': 17,
            'img': 'cities/27/c1.jpg',
            'name': '♫ Витал ♫'
        },
        {
            'id': 133934323,
            'ceil': 'c2',
            'level': 82,
            'castle': 16,
            'img': 'cities/27/c2.jpg',
            'name': '♫ гроз♫ '
        },
        {
            'id': 161980823,
            'ceil': 'b1',
            'level': 78,
            'castle': 15,
            'img': 'cities/27/b1.jpg',
            'name': '♫VOVAYDER♫ '
        }
    ],
    28:
    [
        {
            'id': 306627196,
            'ceil': 'e1',
            'level': 69,
            'castle': 13,
            'img': 'cities/28/e1.jpg',
            'name': '►ПАЛАЧ◄'
        },
        {
            'id': 163446593,
            'ceil': 'e2',
            'level': 79,
            'castle': 15,
            'img': 'cities/28/e2.jpg',
            'name': '►KARATEL◄'
        },
        {
            'id': 151439072,
            'ceil': 'e3',
            'level': 82,
            'castle': 16,
            'img': 'cities/28/e3.jpg',
            'name': '►Lord Darl◄'
        },
        {
            'id': 182523257,
            'ceil': 'e4',
            'level': 72,
            'castle': 14,
            'img': 'cities/28/e4.jpg',
            'name': 'Владимир ЩИТ'
        },
        {
            'id': 3106274,
            'ceil': 'd1',
            'level': 81,
            'castle': 16,
            'img': 'cities/28/d1.jpg',
            'name': '►FREEMAN◄'
        },
        {
            'id': 66781971,
            'ceil': 'd2',
            'level': 81,
            'castle': 16,
            'img': 'cities/28/d2.jpg',
            'name': 'Alexandria',
            'owner': true
        },
        {
            'id': 153379422,
            'ceil': 'd3',
            'level': 76,
            'castle': 16,
            'img': 'cities/28/d3.jpg',
            'name': 'ПАХА BΞR'
        },
        {
            'id': 2245680,
            'ceil': 'c1',
            'level': 81,
            'castle': 17,
            'img': 'cities/28/c1.jpg',
            'name': 'Николай  ЩиТ'
        },
        {
            'id': 163511342,
            'ceil': 'c2',
            'level': 77,
            'castle': 15,
            'img': 'cities/28/c2.jpg',
            'name': 'Серёга '
        },
        {
            'id': 437141818,
            'ceil': 'b1',
            'level': 69,
            'castle': 14,
            'img': 'cities/28/b1.jpg',
            'name': 'Вася  ЩиТ'
        },
    ],
    29: [
        {
            'id': 350423361,
            'ceil': 'd1',
            'level': 59,
            'castle': 11,
            'img': 'cities/29/d1.jpg',
            'name': 'Колизей'
        },
        {
            'id': 439165919,
            'ceil': 'd2',
            'level': 53,
            'castle': 9,
            'img': 'cities/29/d2.jpg',
            'name': 'Мульт'
        },
        {
            'id': 254474678,
            'ceil': 'd4',
            'level': 85,
            'castle': 18,
            'img': 'cities/29/d4.jpg',
            'name': 'Стёпа Brest'
        },
        {
            'id': 121572630,
            'ceil': 'e2',
            'level': 61,
            'castle': 11,
            'img': 'cities/29/e2.jpg',
            'name': 'Тор '
        },
        {
            'id': 170821104,
            'ceil': 'e3',
            'level': 86,
            'castle': 17,
            'img': 'cities/29/e3.jpg',
            'name': 'МИХА'
        },
        {
            'id': 403764549,
            'ceil': 'e4',
            'level': 51,
            'castle': 11,
            'img': 'cities/29/e4.jpg',
            'name': 'Спартак'
        },
        {
            'id': 141415157,
            'ceil': 'c1',
            'level': 72,
            'castle': 15,
            'img': 'cities/29/c1.jpg',
            'name': 'Макс'
        },
        {
            'id': 101663572,
            'ceil': 'c2',
            'level': 83,
            'castle': 17,
            'img': 'cities/29/c2.jpg',
            'name': 'ЛУЧНИК',
            'owner': true
        },
        {
            'id': 47723892,
            'ceil': 'c3',
            'level': 83,
            'castle': 18,
            'img': 'cities/29/c3.jpg',
            'name': 'ЧёрныйЛебедь'
        },
        {
            'id': 156601347,
            'ceil': 'c4',
            'level': 78,
            'castle': 16,
            'img': 'cities/29/c4.jpg',
            'name': 'Евгений '
        },
        {
            'ceil': 'd3',
            'trap': true
        },
    ],
    30: [
        {
            'id': 81171755,
            'ceil': 'e1',
            'level': 88,
            'castle': 18,
            'img': 'cities/30/e1.jpg',
            'name': 'Алекс',
            'owner': true
        },
        {
            'id': 29183343,
            'ceil': 'e2',
            'level': 82,
            'castle': 16,
            'img': 'cities/30/e2.jpg',
            'name': 'Марат@Уфа'
        },
        {
            'id': 88416221,
            'ceil': 'e3',
            'level': 72,
            'castle': 15,
            'img': 'cities/30/e3.jpg',
            'name': 'Віт@лік VP'
        },
        {
            'id': 19274576,
            'ceil': 'e4',
            'level': 76,
            'castle': 15,
            'img': 'cities/30/e4.jpg',
            'name': 'Влад'
        },
        {
            'id': 147144147,
            'ceil': 'd1',
            'level': 79,
            'castle': 16,
            'img': 'cities/30/d1.jpg',
            'name': 'bot_селёдки'
        },
        {
            'id': 274451697,
            'ceil': 'd2',
            'level': 80,
            'castle': 15,
            'img': 'cities/30/d2.jpg',
            'name': 'Valkyrja'
        },
        {
            'id': 357378630,
            'ceil': 'd3',
            'level': 76,
            'castle': 14,
            'img': 'cities/30/d3.jpg',
            'name': 'Юра'
        },
        {
            'id': 59530006,
            'ceil': 'c1',
            'level': 79,
            'castle': 15,
            'img': 'cities/30/c1.jpg',
            'name': 'Николай'
        },
        {
            'id': 97292243,
            'ceil': 'c2',
            'level': 77,
            'castle': 15,
            'img': 'cities/30/c2.jpg',
            'name': 'Домовитый'
        },
        {
            'id': 50599126,
            'ceil': 'b1',
            'level': 68,
            'castle': 13,
            'img': 'cities/30/b1.jpg',
            'name': 'HOOLIGANS'
        }
    ],
    31: [
        {
            'id': 356028957,
            'ceil': 'e1',
            'level': 75,
            'castle': 14,
            'img': 'cities/31/e1.jpg',
            'name': '+ЯпончиК+'
        },
        {
            'id': 119614110,
            'ceil': 'e2',
            'level': 73,
            'castle': 14,
            'img': 'cities/31/e2.jpg',
            'name': '+Юрий+'
        },
        {
            'id': 296513297,
            'ceil': 'e3',
            'level': 75,
            'castle': 14,
            'img': 'cities/31/e3.jpg',
            'name': '+МахнО+'
        },
        {
            'id': 314774927,
            'ceil': 'e4',
            'level': 75,
            'castle': 14,
            'img': 'cities/31/e4.jpg',
            'name': '+ВикинГ+'
        },
        {
            'id': 140397611,
            'ceil': 'd1',
            'level': 79,
            'castle': 15,
            'img': 'cities/31/d1.jpg',
            'name': '+ТанК+'
        },
        {
            'id': 17244722,
            'ceil': 'd2',
            'level': 80,
            'castle': 15,
            'img': 'cities/31/d2.jpg',
            'name': '+АнархопанК+'
        },
        {
            'id': 150492900,
            'ceil': 'd3',
            'level': 78,
            'castle': 15,
            'img': 'cities/31/d3.jpg',
            'name': '+ Игорь +'
        },
        {
            'id': 217649190,
            'ceil': 'c1',
            'level': 86,
            'castle': 17,
            'img': 'cities/31/c1.jpg',
            'name': '+Виктор+  '
        },
        {
            'id': 60792700,
            'ceil': 'c2',
            'level': 83,
            'castle': 16,
            'img': 'cities/31/c2.jpg',
            'name': '+АнархиЯ+',
            'owner': true
        },
        {
            'id': 49478266,
            'ceil': 'b1',
            'level': 67,
            'castle': 13,
            'img': 'cities/31/b1.jpg',
            'name': '+Александр+'
        }
    ],
    32: [
        {
            'id': 320022760,
            'ceil': 'e1',
            'level': 62,
            'castle': 12,
            'img': 'cities/32/e1.jpg',
            'name': 'Иванов '
        },
        {
            'id': 255277094,
            'ceil': 'e2',
            'level': 73,
            'castle': 14,
            'img': 'cities/32/e2.jpg',
            'name': '100% ОТОМЩУ!'
        },
        {
            'id': 154353179,
            'ceil': 'e3',
            'level': 79,
            'castle': 16,
            'img': 'cities/32/e3.jpg',
            'name': '&WA&АрХаНгЕл'
        },
        {
            'id': 33621564,
            'ceil': 'e4',
            'level': 77,
            'castle': 15,
            'img': 'cities/32/e4.jpg',
            'name': 'WГура-ЗанкаA'
        },
        {
            'id': 324912181,
            'ceil': 'd1',
            'level': 65,
            'castle': 12,
            'img': 'cities/32/d1.jpg',
            'name': 'Замок Чудес'
        },
        {
            'id': 204703853,
            'ceil': 'd2',
            'level': 87,
            'castle': 18,
            'img': 'cities/32/d2.jpg',
            'name': '&WA&СамареЦ'
        },
        {
            'id': 113204305,
            'ceil': 'd3',
            'level': 78,
            'castle': 16,
            'img': 'cities/32/d3.jpg',
            'name': '&WA&Фарида'
        },
        {
            'id': 253248750,
            'ceil': 'c1',
            'level': 82,
            'castle': 16,
            'img': 'cities/32/c1.jpg',
            'name': 'Виталий'
        },
        {
            'id': 193771482,
            'ceil': 'c2',
            'level': 77,
            'castle': 16,
            'img': 'cities/32/c2.jpg',
            'name': 'Ольга'
        },
        {
            'id': 7172162,
            'ceil': 'b1',
            'level': 79,
            'castle': 15,
            'img': 'cities/32/b1.jpg',
            'name': '&WA& SVETIK'
        }
    ],
    33: [
        {
            'id': 134057508,
            'ceil': 'e3',
            'level': 81,
            'castle': 16,
            'img': 'cities/33/e3.jpg',
            'name': '@СЕРГОФАН@'
        },
        {
            'id': 83234807,
            'ceil': 'e2',
            'level': 80,
            'castle': 16,
            'img': 'cities/33/e2.jpg',
            'name': '@ SaeL @'
        },
        {
            'id': 106987133,
            'ceil': 'd3',
            'level': 84,
            'castle': 16,
            'img': 'cities/33/d3.jpg',
            'name': '=_Толян_='
        },
        {
            'id': 362998212,
            'ceil': 'e4',
            'level': 58,
            'castle': 10,
            'img': 'cities/33/e4.jpg',
            'name': '@DEXTER@'
        },
        {
            'id': 30067566,
            'ceil': 'd4',
            'level': 83,
            'castle': 16,
            'img': 'cities/33/d4.jpg',
            'name': '@EVGENIY@'
        },
        {
            'id': 4864302,
            'ceil': 'c4',
            'level': 76,
            'castle': 16,
            'img': 'cities/33/c4.jpg',
            'name': '@Тима @'
        },
        {
            'id': 35003499,
            'ceil': 'c3',
            'level': 76,
            'castle': 15,
            'img': 'cities/33/c3.jpg',
            'name': '@"Lim koks"@'
        },
        {
            'id': 188102592,
            'ceil': 'd2',
            'level': 76,
            'castle': 15,
            'img': 'cities/33/d2.jpg',
            'name': '@ERASER@'
        },
        {
            'id': 234025747,
            'ceil': 'e1',
            'level': 73,
            'castle': 14,
            'img': 'cities/33/e1.jpg',
            'name': '@ Nafanya @'
        },
        {
            'id': 376826420,
            'ceil': 'b4',
            'level': 71,
            'castle': 14,
            'img': 'cities/33/b4.jpg',
            'name': '@ DJON @'
        }

    ],
    34: [
        {
            'id': 439165919,
            'ceil': 'e1',
            'level': 55,
            'castle': 11,
            'img': 'cities/34/e1.jpg',
            'name': 'Мульт'
        },
        {
            'ceil': 'e2',
            'trap': true
        },
        {
            'id': 254474678,
            'ceil': 'e3',
            'level': 86,
            'castle': 18,
            'img': 'cities/34/e3.jpg',
            'name': 'Стёпа Brest'
        },
        {
            'id': 138881907,
            'ceil': 'e4',
            'level': 47,
            'castle': 11,
            'img': 'cities/34/e4.jpg',
            'name': 'Альмира'
        },
        {
            'id': 403764549,
            'ceil': 'd1',
            'level': 57,
            'castle': 13,
            'name': 'Спартак'
        },
        {
            'ceil': 'd2',
            'trap': true
        },
        {
            'id': 47723892,
            'ceil': 'd3',
            'level': 84,
            'castle': 18,
            'name': 'ЧёрныйЛебедь'
        },
        {
            'id': 170821104,
            'ceil': 'd4',
            'level': 86,
            'castle': 17,
            'img': 'cities/34/.jpg',
            'name': 'МИХА'
        },
        {
            'id': 350423361,
            'ceil': 'c1',
            'level': 60,
            'castle': 12,
            'img': 'cities/34/c1.jpg',
            'name': 'Колизей'
        },
        {
            'id': 121572630,
            'ceil': 'c2',
            'level': 62,
            'castle': 12,
            'img': 'cities/34/c2.jpg',
            'name': 'Тор '
        },
        {
            'id': 403528330,
            'ceil': 'c3',
            'level': 63,
            'castle': 12,
            'img': 'cities/34/c3.jpg',
            'name': 'Светлана'
        },
        {
            'id': 141415157,
            'ceil': 'c4',
            'level': 72,
            'castle': 15,
            'img': 'cities/34/c4.jpg',
            'name': 'Макс'
        },
    ],
    35: [
        {
            'id': 337035989,
            'ceil': 'e1',
            'level': 61,
            'castle': 12,
            'img': 'cities/35/e1.jpg',
            'name': 'Ольга ТС'
        },
        {
            'id': 6362035,
            'ceil': 'e2',
            'level': 78,
            'castle': 15,
            'img': 'cities/35/e2.jpg',
            'name': 'Tao ТС'
        },
        {
            'id': 927209,
            'ceil': 'e3',
            'level': 81,
            'castle': 16,
            'img': 'cities/35/e3.jpg',
            'name': 'Андрей ТС'
        },
        {
            'id': 354711215,
            'ceil': 'e4',
            'level': 38,
            'castle': 8,
            'img': 'cities/35/e4.jpg',
            'name': '♦Лорелей♦'
        },
        {
            'id': 259312853,
            'ceil': 'd1',
            'level': 90,
            'castle': 18,
            'img': 'cities/35/d1.jpg',
            'name': 'САПСАН ТС'
        },
        {
            'id': 355516573,
            'ceil': 'd2',
            'level': 45,
            'castle': 8,
            'img': 'cities/35/d2.jpg',
            'name': '░☻Nik3☻•SR'
        },
        {
            'id': 192294235,
            'ceil': 'd3',
            'level': 79,
            'castle': 16,
            'img': 'cities/35/d3.jpg',
            'name': 'ARLIHAR TC'
        },
        {
            'id': 18819573,
            'ceil': 'd4',
            'level': 81,
            'castle': 16,
            'img': 'cities/35/d4.jpg',
            'name': 'InL PNX ТС ®'
        },
        {
            'id': 215029508,
            'ceil': 'c2',
            'level': 77,
            'castle': 15,
            'img': 'cities/35/c2.jpg',
            'name': 'Матроскин'
        },
        {
            'id': 23859134,
            'ceil': 'c4',
            'level': 79,
            'castle': 15,
            'img': 'cities/35/c4.jpg',
            'name': 'Іван'
        },
    ],
    36: [
        {
            'id': 45007163,
            'ceil': 'e1',
            'level': 70,
            'castle': 14,
            'img': 'cities/36/e1.jpg',
            'name': 'Андрей NW'
        },
        {
            'id': 99385077,
            'ceil': 'e2',
            'level': 84,
            'castle': 17,
            'name': 'Архитектор'
        },
        {
            'id': 238818139,
            'ceil': 'e3',
            'level': 81,
            'castle': 16,
            'img': 'cities/36/e3.jpg',
            'name': 'Подавись™NW™'
        },
        {
            'id': 255159934,
            'ceil': 'e4',
            'level': 69,
            'castle': 14,
            'img': 'cities/36/e4.jpg',
            'name': 'МИЛЫЙДОМ™NW™'
        },
        {
            'id': 150532566,
            'ceil': 'd1',
            'level': 85,
            'castle': 17,
            'img': 'cities/36/d1.jpg',
            'name': '☼163RU☼™NW™'
        },
        {
            'id': 203837052,
            'ceil': 'd2',
            'level': 79,
            'castle': 16,
            'img': 'cities/36/d2.jpg',
            'name': 'Сахалинец NW'
        },
        {
            'id': 69770823,
            'ceil': 'd3',
            'level': 74,
            'castle': 14,
            'img': 'cities/36/d3.jpg',
            'name': '♣Багира™NW™'
        },
        {
            'id': 61926907,
            'ceil': 'c1',
            'level': 77,
            'castle': 15,
            'img': 'cities/36/c1.jpg',
            'name': 'DIS™NW™'
        },
        {
            'id': 276836787,
            'ceil': 'c2',
            'level': 74,
            'castle': 14,
            'img': 'cities/36/c2.jpg',
            'name': '♣Лютый™NW™'
        },
        {
            'id': 69782403,
            'ceil': 'b1',
            'level': 75,
            'castle': 14,
            'img': 'cities/36/b1.jpg',
            'name': 'Решала™NW™'
        }
    ]
};
