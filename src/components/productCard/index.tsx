import { Buttons, Container } from "./style";
import { BsCart4 } from "react-icons/bs";
import parse from "html-react-parser";
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
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Container>
      <h3>{product.name}</h3>
      <img src={product.images[0].src} alt={product.images[0].alt} />
      <p>{parse(product.shortDescription)}</p>
      <Buttons>
        <button className="Details">Ver mais</button>
        <button className="Cart">{<BsCart4 />}</button>
      </Buttons>
    </Container>
  );
};

export default ProductCard;
