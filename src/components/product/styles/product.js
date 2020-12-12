import styled from 'styled-components'

export const ProductContainer = styled.div.attrs(() => ({
  className: 'ProductContainer'
}))`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: solid 1px rgb(156 156 156 / 20%);
  &:hover{
    background: rgb(226 226 226 / 20%);
    border: solid 1px rgb(226 226 226 / 20%);

  }
`;