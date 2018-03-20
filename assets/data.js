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
    ]
};