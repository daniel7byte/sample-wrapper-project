export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type ProductQueryParams = {
  q?: string;
  limit?: number;
  skip?: number;
  select?: string;
}

export type WrapperProductType = {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}