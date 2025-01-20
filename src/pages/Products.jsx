import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import SearchBox from "../components/SearchBox";
import { getProducts } from "../fakeApi";

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateSearchParams = (key, value) => {
    const updateParams = new URLSearchParams();

    if (value !== "") {
      updateParams.set(key, value);
    } else {
      updateParams.delete(key)
    }

    setSearchParams(updateParams);
  };

  return (
    <main>
      <SearchBox value={productName} onChange={(value) => updateSearchParams('name', value)} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;
