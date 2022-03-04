import { ProductDetailsProps } from "../../types";
import { ContainerDesktop, ContainerMobile } from "./style";
import parse from "html-react-parser";

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <>
      <ContainerMobile>
        <h3>{product?.name}</h3>
        <img src={product?.images[0].src} alt={product?.images[0].alt} />
        {product && <p>{parse(product?.shortDescription)}</p>}

        <button>Adicione ao carrinho</button>
      </ContainerMobile>

      <ContainerDesktop>
        <h1>{product?.name}</h1>
        <div className="informationContainer">
          <img src={product?.images[0].src} alt={product?.images[0].alt} />
          <div className="descriptionContainer">
            <h2>Type: {product?.category.name}</h2>
            {product && <p>{parse(product?.shortDescription)}</p>}
          </div>
        </div>
        <button>Adicione ao carrinho</button>
      </ContainerDesktop>
    </>
  );
};
export default ProductDetails;
