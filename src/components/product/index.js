import * as React from "react";
import {
  ProductContainer
} from './styles/product';

const Product = ({name, image, price}) => {

  console.log(price)
  return (
    <ProductContainer>
      <img src={image?.href} alt='test' />
      <p>{name}</p>
    </ProductContainer>
  )
}

export default Product;