import * as React from "react";
import Layout from "../components/Layout/index";
import Product from "../components/product/index";
import { ProductGrid } from "./styles/main";

// Carousel
import Carousel from "../components/Carousel/";

// markup
const IndexPage = () => {
  const [products, setProducts] = React.useState();
  // const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // setLoading(true)
    fetch(
      "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json"
    )
      .then((res) => res.json())
      .then((response) => {
        setProducts(response?.groups);
        // setLoading(false);
      });
  }, []);
  // if (loading === true) {
  //   return <p>Loading...</p>
  // }
  return (
    <Layout>
      <ProductGrid>
        {products &&
          products.length > 0 &&
          products?.map((product) => {
            return (
              <Product
                name={product.name}
                image={product.hero}
                price={product.price || product.priceRange}
              />
            );
          })}
          <Carousel />
      </ProductGrid>
    </Layout>
  );
};

export default IndexPage;
