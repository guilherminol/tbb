import { createContext, useEffect, useState } from "react";
import data from "../../assets/data.json";
import {
  Product,
  ProductProviderData,
  ProductsProviderProps,
} from "../../types";

export const ProductsContext = createContext({} as ProductProviderData);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([]);

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

  useEffect(() => {
    filterProducts("");
  }, [products]);

  const filterProducts = (product_name: string) => {
    if (product_name) {
      const newProducts = products.filter((product) =>
        product.name.toLowerCase().includes(product_name.toLowerCase())
      );
      setFilteredProduct(newProducts);
    } else {
      setFilteredProduct(products);
    }
  };
  return (
    <ProductsContext.Provider
      value={{ filteredProduct, getOneProduct, filterProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
