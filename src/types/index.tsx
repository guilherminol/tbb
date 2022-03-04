import { ReactNode } from "react";

export interface Product {
  name: string;
  shortDescription: string;
  id: string;
  images: {
    alt: string;
    src: string;
  }[];
  category: {
    name: string;
    id: string;
  };
}

export interface ProductCardProps {
  product: Product;
}

export interface ProductListProps {
  products: Product[];
}

export interface ProductProviderData {
  products: Product[];
  getOneProduct: (id: string) => Product;
}

export interface ProductsProviderProps {
  children: ReactNode;
}

export interface ProductDetailsProps {
  product: Product | undefined;
}
