import { useNavigate, useParams } from "react-router-dom";
import { Container } from "./style";
import { AiFillTag, AiOutlineArrowLeft } from "react-icons/ai";
import { ProductsContext } from "../../providers/products";
import { useContext, useEffect, useState } from "react";
import { Product } from "../../types";
import ProductDetails from "../../components/productDetails";

const ProductDetail = () => {
  const { productId } = useParams();
  const { getOneProduct } = useContext(ProductsContext);
  const [product, setProduct] = useState<Product>();

  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      setProduct(getOneProduct(productId));
    }
  }, [getOneProduct, productId]);

  return (
    <Container>
      <button onClick={() => navigate("/")} className="GetBack">
        <AiOutlineArrowLeft />
      </button>
      <header>
        <AiFillTag />
        <h1>Um pouco mais sobre o produto</h1>
        <AiFillTag className="mobileLogo" />
      </header>
      <ProductDetails product={product} />
    </Container>
  );
};

export default ProductDetail;
