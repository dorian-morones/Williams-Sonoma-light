import styled from "styled-components";

export const ProductContainer = styled.div.attrs(() => ({
  className: "ProductContainer",
}))`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: solid 1px rgb(156 156 156 / 20%);
  &:hover {
    background: rgb(226 226 226 / 20%);
    border: solid 1px rgb(226 226 226 / 20%);
  }
`;

export const ProductImage = styled.img.attrs(() => ({
  className: "ProductImage",
}))`
  object-fit: contain;
`;

export const ProductDetails = styled.div.attrs(() => ({
  className: "ProductDetails",
}))`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
`;

export const Title = styled.div.attrs(() => ({
  className: "Title",
}))`
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  margin: 0px;
`;

export const PriceContainer = styled.div.attrs(() => ({
  className: "PriceContainer",
}))`
  display: flex;
  flex-direction: column;
`;

export const PriceItem = styled.p.attrs(() => ({
  className: "PriceItemSelling",
}))`
  margin: 0;
  font-size: 14px;
  font-family: Helvetica, sans-serif;
`;

export const PriceItemVariant = styled.span.attrs(() => ({
  className: "PriceItemRegular",
}))`
  text-decoration: line-through;
`;

export const PriceItemSpecial = styled.p.attrs(() => ({
  className: "PriceItemRegular",
}))`
  font-size: 14px;
  background: red;
  text-align: center;
  font-weight: bold;
  color: #fff;
  transform: skew(-20deg);
  margin: 0;
  margin-bottom: 5px;
  font-family: Helvetica, sans-serif;
`;
