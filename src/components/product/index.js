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

const Product = ({ name, image, price }) => {
  const handlePrice = (price) => {
    console.log(price);
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
      console.log("price", price?.selling);
      return (
        <>
          <PriceItem>Before: $<PriceItemVariant>{price?.selling?.high}</PriceItemVariant></PriceItem>
          <PriceItem>Price: ${price?.selling?.low}</PriceItem>
        </>
      );
    }
  };

  return (
    <ProductContainer>
      <ProductImage src={image?.href} alt="test" />
      <ProductDetails>
        <Title>{name.replace("&amp;", "&")}</Title>
        <PriceContainer>{handlePrice(price)}</PriceContainer>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product;
