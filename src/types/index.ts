export interface Product {
    id: string;
    image: string;
    name: string;
    price: number;
    inStock: boolean;
    tags?: string[];
    category: Category
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export type Category = "phone" | "tablet" | "computer";
