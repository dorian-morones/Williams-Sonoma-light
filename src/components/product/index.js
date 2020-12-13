import * as React from "react";
import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  Title,
  PriceContainer,
  PriceItem,
  PriceItemVariant,
  PriceItemSpecial,
} from "./styles/product";

const Product = ({ id, name, image, price, handleProductPhotos }) => {
  const handlePrice = (price) => {
    if (price?.regular) {
      return (
        <>
          {price?.type && <PriceItemSpecial>{price?.type}</PriceItemSpecial>}
          {price.regular !== price.selling && (
            <PriceItem>
              Before: $<PriceItemVariant>{price?.regular}</PriceItemVariant>
            </PriceItem>
          )}
          <PriceItem>{`Price: $${price?.selling}`}</PriceItem>
        </>
      );
    }
    if (price?.selling) {
      return (
        <>
          <PriceItem>
            Before: $<PriceItemVariant>{price?.selling?.high}</PriceItemVariant>
          </PriceItem>
          <PriceItem>Price: ${price?.selling?.low}</PriceItem>
        </>
      );
    }
  };
  console.log("id", id);
  return (
    <ProductContainer onClick={() => handleProductPhotos(id)}>
      <ProductImage src={image?.href} alt="test" />
      <ProductDetails>
        <Title>{name.replace("&amp;", "&")}</Title>
        <PriceContainer>{handlePrice(price)}</PriceContainer>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product;
