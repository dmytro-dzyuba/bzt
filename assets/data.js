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
    ]
};