interface ProductElements { 
    name: string,
    price: number
}

interface Products {
    id: number;
    year: string;
    internet: ProductElements;
    tv: ProductElements;
    phone: ProductElements;
    decoder: ProductElements;
}