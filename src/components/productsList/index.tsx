import { ProductListProps } from "../../types";
import ProductCard from "../productCard";
import { Container } from "./style";

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </Container>
  );
};
export default ProductList;
