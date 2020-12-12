import styled from 'styled-components';

export const Menu = styled.div.attrs(() => ({
  className: 'Menu',
}))`
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 15px 10px;
  box-shadow: 0px 2px 5px 0px rgba(50, 50, 50, 0.2);
  margin-bottom: 10px;
`

export const LogoImage = styled.img.attrs(() => ({
  className: 'Logo'
}))`
  width: 6em;
`;