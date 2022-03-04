import { createContext, ReactNode, useEffect, useState } from "react";
import data from "../../assets/data.json";

interface Product {
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
interface ProductProviderData {
  products: Product[];
  getOneProduct: (id: string) => Product;
}

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext({} as ProductProviderData);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addDataIntoCache = (
    cacheName: string,
    url: string,
    response: [] | Product[]
  ) => {
    const data = new Response(JSON.stringify(response));
    if ("caches" in window) {
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
      });
    }
  };

  const getSingleCacheData = async (cacheName: string, url: string) => {
    if (typeof caches === "undefined") return false;

    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);

    if (!cachedResponse || !cachedResponse.ok) {
      return null;
    }

    return cachedResponse?.json().then((item) => {
      return item;
    });
  };

  const getAllProducts = async () => {
    const cacheData = await getSingleCacheData("Products", "/products");
    if (cacheData) {
      setProducts(cacheData);
    } else {
      addDataIntoCache("Products", "/products", data.data.nodes);
    }
  };

  const getOneProduct = (id: string) => {
    const filteredProduct = products.filter((p) => p.id === id);
    return filteredProduct[0];
  };

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductsContext.Provider value={{ products, getOneProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
