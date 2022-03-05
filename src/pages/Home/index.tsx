import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import ProductList from "../../components/productsList";
import { ProductsContext } from "../../providers/products";
import { Container, Input } from "./style";

const Home = () => {
  const { filteredProduct, filterProducts } = useContext(ProductsContext);
  const [search, setSearch] = useState("");

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
      </div>

      <ProductList products={filteredProduct} />
    </Container>
  );
};

export default Home;
