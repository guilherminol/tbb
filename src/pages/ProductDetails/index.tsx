import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  return <h1>{productId}</h1>;
};

export default ProductDetail;
