import styled from "styled-components";

export const CarouselContainer = styled.div.attrs(() => ({
  className: "CarouselContainer",
}))`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgb(156 156 156 / 20%);
  left: 0;
  top: 0;
  overflow: hidden
`;
