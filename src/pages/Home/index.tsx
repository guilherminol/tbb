import { useContext } from "react";
import ProductList from "../../components/productsList";
import { ProductsContext } from "../../providers/products";
import { Container } from "./style";

const Home = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      <header>
        <h1>Bem Vindo(a) a nossa loja!</h1>
        <h2>Conheça nossos produtos:</h2>
      </header>
      <ProductList products={products} />
    </Container>
  );
};

export default Home;
