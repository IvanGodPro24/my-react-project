import { useParams, useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import { getProductById } from "../fakeApi";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  const product = getProductById(productId);

  const location = useLocation();
  const backLinkHref = location.state ?? "/products";

  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <div>
        <h2>
          Product - {product.name} - {productId}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};

export default ProductDetails;
