

const IMAGES = {
    americano: 'americano.svg',
    arabe: 'arabe.svg',
    'cafe-com-leite': 'cafe-com-leite.svg',
    'cafe-gelado': 'cafe-gelado.svg',
    'cappucino': 'cappucino.svg',
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

interface Coffee {
    img: string,
    tags: string[],
    type: string,
    description: string,
    price: number,
    quantity: number

}

export const CoffeeTypes: Coffee[] = [
    {
        img: `/assets/${IMAGES.expresso}`,
        tags: ['Tradicional'],
        type: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
        quantity: 0
    },
    {
        img: `/assets/${IMAGES.americano}`,
        tags: ['Tradicional'],
        type: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
        quantity: 0
    },
    {
        img: `/assets/${IMAGES['expresso-cremoso']}`,
        tags: ['Tradicional'],
        type: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
        quantity: 0
    },
    {
        img: `/assets/${IMAGES['cafe-gelado']}`,
        tags: ['Tradicional', 'Gelado'],
        type: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
        quantity: 0
    }
];