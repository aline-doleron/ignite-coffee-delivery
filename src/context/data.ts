

const IMAGES = {
    americano: 'americano.svg',
    arabe: 'arabe.svg',
    'cafe-com-leite': 'cafe-com-leite.svg',
    'cafe-gelado': 'cafe-gelado.svg',
    capuccino: 'capuccino.svg',
    'chocolate-quente': 'chocolate-quente.svg',
    cubano: 'cubano.svg',
    'expresso-cremoso': 'expresso-cremoso.svg',
    expresso: 'expresso.svg',
    havaiano: 'havaiano.svg',
    irlandes: 'irlandes.svg',
    latte: 'latte.svg',
    macchiato: 'macchiato.svg',
    mochaccino: 'mochaccino.svg',
};

export interface Coffee {
    id: number;
    img: string,
    tags: string[],
    type: string,
    description: string,
    price: number,
    quantity: number

}

export const CoffeeTypes: Coffee[] = [
    {
        id: 1,
        img: `/assets/${IMAGES.expresso}`,
        tags: ['Tradicional'],
        type: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        quantity: 0
    },
    {
        id: 2,
        img: `/assets/${IMAGES.americano}`,
        tags: ['Tradicional'],
        type: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        quantity: 0
    },
    {
        id: 3,
        img: `/assets/${IMAGES['expresso-cremoso']}`,
        tags: ['Tradicional'],
        type: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        quantity: 0
    },
    {
        id: 4,
        img: `/assets/${IMAGES['cafe-gelado']}`,
        tags: ['Tradicional', 'Gelado'],
        type: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
        quantity: 0
    },
    {
        id: 5,
        img: `/assets/${IMAGES['cafe-com-leite']}`,
        tags: ['Tradicional', 'com leite'],
        type: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
        quantity: 0
    },
    {
        id: 6,
        img: `/assets/${IMAGES.latte}`,
        tags: ['Tradicional', 'com leite'],
        type: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
        quantity: 0
    },
    {
        id: 7,
        img: `/assets/${IMAGES.capuccino}`,
        tags: ['Tradicional', 'com leite'],
        type: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
        quantity: 0
    },
    {
        id: 8,
        img: `/assets/${IMAGES.macchiato}`,
        tags: ['Tradicional', 'com leite'],
        type: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
        quantity: 0
    },
    {
        id: 9,
        img: `/assets/${IMAGES.mochaccino}`,
        tags: ['Tradicional', 'com leite'],
        type: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
        quantity: 0
    },
    {
        id: 10,
        img: `/assets/${IMAGES['chocolate-quente']}`,
        tags: ['Tradicional', 'com leite'],
        type: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
        quantity: 0
    },
    {
        id: 11,
        img: `/assets/${IMAGES.cubano}`,
        tags: ['Tradicional', 'alcoólico', 'gelado'],
        type: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
        quantity: 0
    },
    {
        id: 12,
        img: `/assets/${IMAGES.havaiano}`,
        tags: ['especial'],
        type: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
        quantity: 0
    },
    {
        id: 13,
        img: `/assets/${IMAGES.arabe}`,
        tags: ['especial'],
        type: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
        quantity: 0
    },
    {
        id: 14,
        img: `/assets/${IMAGES.irlandes}`,
        tags: ['especial', 'alcoólico'],
        type: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
        quantity: 0
    }
];