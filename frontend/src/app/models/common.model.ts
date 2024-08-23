export interface Grocery {
    _id: any;
    name: string;
    price: number;
}

export interface Bucket extends Grocery {
    quantity: number;
}
