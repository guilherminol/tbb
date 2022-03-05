import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import ProductList from "../../components/productsList";
import { ProductsContext } from "../../providers/products";
import { Container, Input } from "./style";

const Home = () => {
  const { filteredProduct, filterProducts } = useContext(ProductsContext);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getCategories = () => {
    const mapCategories = filteredProduct.map(
      (product) => product.category.name
    );
    const uniqueCategories = [...new Set(mapCategories)];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    getCategories();
  }, [filteredProduct]);

  return (
    <Container>
      <header>
        <h1>Bem Vindo(a) a nossa loja!</h1>
        <h2>Conheça nossos produtos:</h2>
      </header>
      <div>
        <Input>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className={"searchButton"}
            onClick={() => filterProducts(search)}
          >
            <BsSearch />
          </button>
        </Input>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value={undefined}>Selecione uma categoria</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <ProductList products={filteredProduct} />
    </Container>
  );
};

export default Home;
