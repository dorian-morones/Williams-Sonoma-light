import styled from 'styled-components';

export const ProductGrid = styled.div.attrs(() => ({
  className: 'ProductGrid',
}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`