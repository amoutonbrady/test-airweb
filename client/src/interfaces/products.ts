export interface Category {
  id: number;
  index: number;
  label: string;
  description: string;
  products: Product[];
}

export interface Product {
  id: number;
  label: string;
  description: string;
  price: number;
  category_id: number;
  thumbnail_url?: any;
}
