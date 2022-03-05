import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import ProductList from "../../components/productsList";
import { ProductsContext } from "../../providers/products";
import { Container, Input } from "./style";

const Home = () => {
  const { filteredProduct, filterProducts, categories } =
    useContext(ProductsContext);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    filterProducts(search, selectedCategory);
  }, [selectedCategory, search]);

  return (
    <Container>
      <header>
        <h1>Bem Vindo(a) a nossa loja!</h1>
        <h2>Conheça nossos produtos:</h2>
      </header>
      <div className="filteringInputs">
        <Input>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <BsSearch />
        </Input>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Filtrar por categoria</option>
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
