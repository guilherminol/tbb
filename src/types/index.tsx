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
  filteredProduct: Product[];
  getOneProduct: (id: string) => Product;
  filterProducts: (
    product_name: string,
    product_category?: string | undefined
  ) => void;
  categories: string[];
}

export interface ProductsProviderProps {
  children: ReactNode;
}

export interface ProductDetailsProps {
  product: Product | undefined;
}
