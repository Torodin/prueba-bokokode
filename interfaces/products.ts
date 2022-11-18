export interface ProductsData {
    data: Data;
}

export interface Data {
    current_page: number;
    data: Product[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}

export interface Product {
    _id: string;
    name: string;
    category: string;
    price: number;
    currency: string;
    image: Image;
    bestseller: boolean;
    featured: boolean;
    description: string;
    people_also_buy: Product[];
    updated_at: Date;
    created_at: Date;
}

export interface Image {
    src: string;
    alt: string;
}

export interface Link {
    url: null | string;
    label: string;
    active: boolean;
}
