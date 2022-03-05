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
  const [categories, setCategories] = useState<string[]>([]);

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

  const getCategories = () => {
    const mapCategories = products.map((product) => product.category.name);
    const uniqueCategories = [...new Set(mapCategories)];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    filterProducts();
    getCategories();
  }, [products]);

  const filterProducts = (product_name = "", product_category = "") => {
    if (product_name && product_category) {
      const newProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(product_name.toLowerCase()) &&
          product.category.name === product_category
      );
      setFilteredProduct(newProducts);
    } else if (product_category) {
      const newProducts = products.filter(
        (product) => product.category.name === product_category
      );
      setFilteredProduct(newProducts);
    } else if (product_name) {
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
      value={{ filteredProduct, getOneProduct, filterProducts, categories }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
