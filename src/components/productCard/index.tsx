import { Buttons, Container } from "./style";
import { BsCart4 } from "react-icons/bs";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "../../types";

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <h3>{product.name}</h3>
      <img src={product.images[0].src} alt={product.images[0].alt} />
      <p>{parse(product.shortDescription)}</p>
      <Buttons>
        <button className="Details" onClick={() => navigate(product.id)}>
          Ver mais
        </button>
        <button className="Cart">{<BsCart4 />}</button>
      </Buttons>
    </Container>
  );
};

export default ProductCard;
