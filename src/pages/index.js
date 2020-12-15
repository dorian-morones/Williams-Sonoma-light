import * as React from "react";
import Layout from "../components/Layout/index";
import Product from "../components/product/index";
import { ProductGrid } from "./styles/main";
import Logo from "src/images/logo.png";
// Carousel
import Carousel from "../components/Carousel/";

// markup
const IndexPage = () => {
  const [products, setProducts] = React.useState();
  const [showCarousel, setShowCarousel] = React.useState(false);
  const [productImages, setProductImages] = React.useState();

  React.useEffect(() => {
    fetch(
      "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json"
    )
      .then((res) => res.json())
      .then((response) => {
        setProducts(response?.groups);
      });
  }, []);

  const handleProductPhotos = (id) => {
    let selectedItem = products.filter(item => item.id === id)
    setProductImages(selectedItem[0]?.images);
    setShowCarousel(true);
    window.scrollTo( 0, 0);
  };

  const handleClose = () => {
    setShowCarousel(false);
    setProductImages([])
  };

  return (
    <Layout logoImg={Logo} data-testid="home-item">
      <ProductGrid>
        {products &&
          products.length > 0 &&
          products?.map((product) => {
            return (
              <Product
                id={product.id}
                name={product.name}
                image={product.hero}
                price={product.price || product.priceRange}
                handleProductPhotos={handleProductPhotos}
              />
            );
          })}
      </ProductGrid>
      {(showCarousel && productImages !== undefined) && <Carousel onClose={handleClose} images={productImages} />}
    </Layout>
  );
};

export default IndexPage;
